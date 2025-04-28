---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} erlaubt einer Website zu steuern, ob ein neues oberstes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch die Navigation zu einer neuen Seite geöffnet wird, in derselben {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} (BCG) oder in einer neuen Browsing-Kontextgruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem Öffner getrennt, und das neue Dokument kann von seinem Öffner prozessisoliert sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert nutzen können, um auf das globale Objekt zuzugreifen, und verhindert damit eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht über [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann.
Dies ermöglicht Ihnen mehr Kontrolle über die Referenzen zu einem Fenster als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das ausgehende Navigationen beeinflusst, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontextgruppe mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolierung auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet und geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Bei der Verwendung von `Window.open()` öffnen Dokumente mit `unsafe-none` immer Dokumente mit einem anderen Wert in eine neue BCG.
    Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` öffnet immer ein Dokument mit `unsafe-none` in einer neuen BCG.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-origin-Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-origin sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich wie die [`same-origin`](#same-origin) Direktive, außer dass es erlaubt, Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG zu öffnen, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin` Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und deren Referenzen behalten muss.
    Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-origin sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, außer wenn sie durch Navigieren von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen _gleich-origin_ Dokumente prozessisoliert werden müssen.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner, isoliert den Browsing-Kontext für das aktuelle Dokument ungeachtet der Herkunft des Öffnerdokuments.
    Dies stellt sicher, dass der Öffner keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleich-origin sind.

    Bei Navigationen öffnet ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG, es sei denn, sie sind gleich-origin und haben die Direktive `noopener-allow-popups`.
    Bei Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie gleich-seitig oder cross-seitig sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so einstellen, dass nur gleich-origin und vertrauenswürdige Cross-Origin-Ressourcen, die in der Lage sein müssen, sich gegenseitig zu skripten, in der gleichen Browsing-Kontextgruppe geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente in derselben BCG oder einer neuen BCG geöffnet werden, nachdem eine Navigation erfolgt oder ein Fenster programmatisch geöffnet wird.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, unabhängig davon, ob es sich um ein Popup, einen Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Bei der Navigation zwischen Dokumenten wird das neue Dokument in der gleichen BCG geöffnet, wenn die beiden Dokumente "übereinstimmende coop-Richtlinien" haben, und anderenfalls in eine neue BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleich-origin sind.

Die folgende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente in derselben oder einer neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups`   |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ------------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                       | Neu                       |
| `same-origin-allow-popups` | Neu           | Gleich wenn gleich-origin  | Neu                       | Neu                       |
| `same-origin`              | Neu           | Neu                        | Gleich wenn gleich-origin | Neu                       |
| `noopener-allow-popups`    | Neu           | Neu                        | Neu                       | Gleich wenn gleich-origin |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß den folgenden Regeln, die der Reihe nach ausgewertet werden, in einer neuen BCG geöffnet:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in einer neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das Öffnerdokument COOP entweder auf `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in derselben BCG
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigationen) haben => öffne das neue Dokument in derselben BCG
4. Andernfalls öffnen Sie das neue Dokument in einer neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente in der gleichen oder einer neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                       | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich wenn gleich-origin  | Neu                       | Neu                     |
| `same-origin`              | Neu           | Neu                        | Gleich wenn gleich-origin | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                        | Neu                       | Neu                     |

## Beispiele

### Funktionen, die von der Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin isoliert ist und ob die Funktionen daher eingeschränkt sind:

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

### Trennung der Öffnerbeziehung

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf dem gleichen Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihm Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers, über verschiedene Dienste hinweg, enthält.

Die Administratoren der "Passwörter"-Anwendung würden sehr gerne sicherstellen, dass sie nicht direkt von der "Chat"-App geskriptet werden kann, die aufgrund ihrer Natur eine größere XSS-Oberfläche hat.
Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf unterschiedlichen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung liegen.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` ausgeliefert wird, zeigt der von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` an, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Öffner die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes tun:

- Fetch Metadata verwenden, um gleich-originige Anfragen an die sensiblere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass alle Authentifizierungscookies `HttpOnly` sind.
- Sicherstellen, dass keine Root-Level-Service-Worker von der weniger sensiblen App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensitiven Informationen an eine andere gleich-originige App preisgeben.
- Sicherstellen, dass die Login-Seite auf einem separaten Ursprung bereitgestellt wird, da das automatische Ausfüllen des Passwort-Managers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise weiterhin im selben Prozess wie die weniger sensible App platziert, was sie anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
