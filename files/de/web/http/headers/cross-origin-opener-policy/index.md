---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues oberes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird oder indem zu einer neuen Seite navigiert wird, in derselben {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} (BCG) oder in einer neuen Browsing-Kontext-Gruppe geöffnet wird.

Wenn in einer neuen BCG geöffnet, werden alle Verweise zwischen dem neuen Dokument und seinem Öffner getrennt, und das neue Dokument kann von seinem Öffner prozessisoliert sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf dessen globales Objekt zuzugreifen. Dadurch werden eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind, verhindert.

Es bedeutet auch, dass jedes Objekt, das Ihr Dokument in einer neuen BCG öffnet, nicht auf es zugreifen kann, indem [`window.opener`](/de/docs/Web/API/Window/opener) verwendet wird.
Dies ermöglicht Ihnen, mehr Kontrolle über Verweise auf ein Fenster zu haben als mit [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), was sich auf ausgehende Navigationen auswirkt, aber nicht auf Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontext-Gruppe mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Verwendung von COOP für die Prozessisolation auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet und geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktivanweisung).

    Bei der Verwendung von `Window.open()` werden Dokumente mit `unsafe-none` Dokumente mit einem anderen Wert immer in eine neue BCG öffnen.
    Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleichartige Ursprungsdokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur in derselben BCG geöffnet, wenn beide Dokumente gleichartig sind und die `same-origin`-Richtlinie haben.

- `same-origin-allow-popups`

  - : Diese ähnelt der [`same-origin`](#same-origin)-Direktive, außer dass sie es ermöglicht, Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG zu öffnen, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Einschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und einen Verweis darauf behalten muss.
    Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur in derselben BCG geöffnet, wenn beide Dokumente gleichartig sind und die `same-origin-allow-popups`-Direktive haben.

- `noopener-allow-popups` {{experimental_inline}}

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolierung für \_gleichartige Ursprungs-\_Dokumente erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner, isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig davon, ob das Ursprung-Dokument des Öffners gleichartig ist.
    Dies stellt sicher, dass der Öffner keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleichartig sind.

    Bei Navigationen wird ein Dokument mit dieser Richtlinie immer andere Dokumente in eine neue BCG öffnen, es sei denn, sie sind gleichartig und haben die Direktive `noopener-allow-popups`.
    Bei der Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Direktive Dokumente in eine neue BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie Same-Site oder Cross-Site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleichartige und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten müssen, in derselben Browsing-Kontext-Gruppe geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente nach einer Navigation oder beim programmatischen Öffnen eines Fensters in derselben BCG oder einer neuen BCD geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, unabhängig davon, ob es sich um ein Popup, einen Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in derselben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende Coop-Richtlinien" haben, ansonsten in einer neuen BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind, oder
- keines der Dokumente `unsafe-none` ist, ihre Richtlinienwerte gleich sind und sie gleichartig sind.

Die folgende Tabelle zeigt das Ergebnis dieser Regel, ob Dokumente in derselben oder einer neuen BCG für die verschiedenen Richtlinienwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffner (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`           | `noopener-allow-popups` |
| ---------------------------------- | ------------- | -------------------------- | ----------------------- | ----------------------- |
| `unsafe-none`                      | Gleich        | Neu                        | Neu                     | Neu                     |
| `same-origin-allow-popups`         | Neu           | Gleich wenn gleichartig    | Neu                     | Neu                     |
| `same-origin`                      | Neu           | Neu                        | Gleich wenn gleichartig | Neu                     |
| `noopener-allow-popups`            | Neu           | Neu                        | Neu                     | Gleich wenn gleichartig |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß den folgenden Regeln, die in dieser Reihenfolge ausgewertet werden, in derselben BCG geöffnet:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben für Navigationen beschrieben)
4. Wahr: Andernfalls!

Die folgende Tabelle zeigt das Verhalten des Öffners für die verschiedenen Richtlinienwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffner (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups` | `same-origin`           | `noopener-allow-popups` |
| ---------------------------------- | ------------- | -------------------------- | ----------------------- | ----------------------- |
| `unsafe-none`                      | Gleich        | Neu                        | Neu                     | Neu                     |
| `same-origin-allow-popups`         | Gleich        | Gleich wenn gleichartig    | Neu                     | Neu                     |
| `same-origin`                      | Neu           | Neu                        | Gleich wenn gleichartig | Neu                     |
| `noopener-allow-popups`            | Gleich        | Neu                        | Neu                     | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-Isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-Isoliert ist und ob die Funktionen daher eingeschränkt sind:

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

### Die Beziehung zum Öffner trennen

Betrachten wir einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf demselben Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, andere Benutzer zu kontaktieren und ihnen Nachrichten zu senden.
- Eine Passwort-Management-Anwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten dringend sicherstellen, dass die Anwendung nicht direkt von der "Chat"-App geskriptet werden kann, die naturgemäß eine größere XSS-Angriffsfläche hat.
Die "richtige" Methode, diese Anwendungen zu isolieren, wäre, sie auf unterschiedlichen Ursprüngen zu hosten, aber in manchen Fällen ist das nicht möglich und die beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung bleiben.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der durch [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Öffner die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes tun:

- Fetch Metadata verwenden, um gleichartige Anfragen an die empfindlichere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Sicherstellen, dass keine root-level Service-Worker von der weniger empfindlichen App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` bei der empfindlicheren App keine sensiblen Informationen an andere gleichartige Anwendungen preisgeben.
- Sicherstellen, dass ihre Anmeldeseite auf einem separaten Ursprung bereitgestellt wird, da das Autofill des Passwortmanagers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser möglicherweise immer noch die empfindlichere App im selben Prozess wie die weniger empfindliche App zuweist, wodurch sie anfällig für Spectre-ähnliche Angriffe wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
