---
title: Cross-Origin-Opener-Policy (COOP) header
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht einer Website, zu kontrollieren, ob ein neues Dokument auf oberster Ebene, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder zu dem navigiert wird, in derselben {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} (BCG) oder in einer neuen Browsing-Kontextgruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem Öffner getrennt, und das neue Dokument kann prozessisoliert von seinem Öffner sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf das globale Objekt zuzugreifen, und verhindert damit eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass Objekte, die von Ihrem Dokument in einer neuen BCG geöffnet werden, nicht darauf zugreifen können, indem sie [`window.opener`](/de/docs/Web/API/Window/opener) verwenden.
Dies ermöglicht mehr Kontrolle über Fensterreferenzen als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das ausgehende Navigationen beeinflusst, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und davon, ob das neue Dokument nach einer Navigation geöffnet wird oder ob es mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontextgruppe mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Verwendung von COOP zur Prozessisolierung auszuschließen.
    Dies ist der Standardwert.

    Bei Navigierungen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet, es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Bei der Verwendung von `Window.open()` werden Dokumente mit `unsafe-none` immer Dokumente mit jedem anderen Wert in eine neue BCG öffnen.
    Jedoch können Dokumente mit `unsafe-none` in derselben BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originige Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolierung](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originig sind und die `same-origin`-Direktive haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin)-Direktive, außer dass es das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolierung benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und eine Referenz dazu behalten muss.
    Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument mit der gleichen BCG unter Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument cross-site oder same-site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originig sind und die `same-origin-allow-popups`-Direktive haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, außer wenn sie von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolierung _gleich-originiger_ Dokumente erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner, isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig vom Ursprung des Öffner-Dokuments.
    Dies stellt sicher, dass der Öffner nicht in geöffneten Dokumenten skripten kann und umgekehrt – selbst wenn sie gleich-originig sind.

    Bei Navigierungen öffnet ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG, es sei denn, sie sind gleich-originig und haben die Direktive `noopener-allow-popups`.
    Bei der Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und es spielt keine Rolle, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-originige und vertrauenswürdige cross-originige Ressourcen, die sich gegenseitig skripten können müssen, es erlaubt sein sollten, im selben Browsing-Kontext zu öffnen.
Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente im selben BCG oder einem neuen BCG nach einer Navigation oder dem Programmieren eines Fensters geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, Tab, Fenster oder einen anderen Kontext handelt.

### Navigierungen

Beim Navigieren zwischen Dokumenten wird das neue Dokument im gleichen BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, ansonsten wird es in einer neuen BCG geöffnet.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleich-originig sind.

Die folgende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente im gleichen oder in einem neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`              | `noopener-allow-popups`    |
| -------------------------- | ------------- | -------------------------- | -------------------------- | -------------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                        | Neu                        |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleich-origin | Neu                        | Neu                        |
| `same-origin`              | Neu           | Neu                        | Gleich, wenn gleich-origin | Neu                        |
| `noopener-allow-popups`    | Neu           | Neu                        | Neu                        | Gleich, wenn gleich-origin |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß den folgenden Regeln, die der Reihenfolge nach bewertet werden, in einem neuen BCG geöffnet:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in einer neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt und das öffnende Dokument COOP auf `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in der gleichen BCG
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigierungen) haben => öffne das neue Dokument in der gleichen BCG
4. Andernfalls öffne das neue Dokument in einer neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente im gleichen oder in einem neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`              | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | -------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                        | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich, wenn gleich-origin | Neu                        | Neu                     |
| `same-origin`              | Neu           | Neu                        | Gleich, wenn gleich-origin | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                        | Neu                        | Neu                     |

## Beispiele

### Funktionen, die auf Cross-Origin-Isolierung basieren

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist und daher ob die Funktionen eingeschränkt sind:

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

### Trennen der Öffner-Beziehung

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf demselben Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihm Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers über verschiedene Dienste hinweg enthält.

Die Administratoren der "Passwörter"-Anwendung würden sehr gerne sicherstellen, dass sie nicht direkt von der "Chat"-App gescriptet werden kann, die naturgemäß eine größere XSS-Oberfläche hat.
Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder Markengründen auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument gescriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, zeigt das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` an, dass die Fenster geschlossen sind ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Öffner die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes tun:

- Fetch Metadata verwenden, um gleich-originige Anfragen an die sensitivere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass ihre Authentifizierungscookies alle `HttpOnly` sind.
- Sicherstellen, dass Root-Level-Service-Worker nicht von der weniger sensitiven App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensitivieren App keine sensiblen Informationen für andere gleich-originige Apps offenbart.
- Sicherstellen, dass ihre Login-Seite auf einem separaten Ursprung bereitgestellt wird, da das Passwort-Manager-Autofill basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensitivere App möglicherweise dennoch im gleichen Prozess wie die weniger sensible platziert, was sie anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
