---
title: Cross-Origin-Opener-Policy (COOP) header
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website, zu kontrollieren, ob ein neues oberstes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigieren zu einer neuen Seite erstellt wird, im gleichen {{Glossary("Browsing_context", "Browsing-Kontext")}} (BCG) oder in einem neuen Browsing-Kontext geöffnet wird.

Wenn es in einem neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem Öffner getrennt, und das neue Dokument kann prozessisoliert von seinem Öffner sein. Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und den zurückgegebenen Wert nutzen können, um auf dessen globales Objekt zuzugreifen, was eine Reihe von Cross-Origin-Angriffen, bekannt als [XS-Leaks](https://xsleaks.dev/), verhindert.

Es bedeutet auch, dass jedes Objekt, das Ihr Dokument in einem neuen BCG öffnet, nicht mit [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann. Dies ermöglicht Ihnen mehr Kontrolle über Verweise auf ein Fenster als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Das Dokument erlaubt die gemeinsame Nutzung seines Browsing-Kontextes mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolierung abzumelden.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in einem neuen BCG geöffnet, es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keinen COOP-Direktivwert).

    Bei der Verwendung von `Window.open()` öffnen Dokumente mit `unsafe-none` immer Dokumente mit einem anderen Wert in einem neuen BCG.
    Dokumente mit `unsafe-none` können jedoch im gleichen BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einem neuen BCG öffnen.

- `same-origin`
  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleichherkunftliche Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für ein BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann im gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleichherkunftlich sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`
  - : Dies ist ähnlich wie die [`same-origin`](#same-origin)-Direktive, erlaubt jedoch das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) im gleichen BCG, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Einschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile von Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und eine Referenz darauf behalten muss.
    Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument im gleichen BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument crossing-site oder same-site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur dann im gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleichherkunftlich sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`
  - : Dokumente mit dieser Direktive werden immer in einem neuen BCG geöffnet, außer wenn sie durch Navigieren von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolierung von _gleichherkunftlichen_ Dokumenten erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner und isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig vom Ursprung des Öffnerdokuments. Dies stellt sicher, dass der Öffner keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleichherkunftlich sind.

    Bei Navigationen wird ein Dokument mit dieser Direktive immer andere Dokumente in einem neuen BCG öffnen, es sei denn, sie sind gleichherkunftlich und haben die Direktive `noopener-allow-popups`.
    Bei der Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Direktive Dokumente in einem neuen BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleichherkunftliche und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten müssen, im gleichen Browsing-Kontext geöffnet sein dürfen. Andere Ressourcen sollten cross-origin in ihrer eigenen Gruppe isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente nach einer Navigation oder dem programmatischen Öffnen eines Fensters im gleichen oder einem neuen BCG geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, ein Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument im gleichen BCG geöffnet, wenn die beiden Dokumente "übereinstimmende coop-Richtlinien" haben, und ansonsten in einem neuen BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleichherkunftlich sind.

Die folgende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente im gleichen oder einem neuen BCG für die verschiedenen Direktivenwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups`         |
| -------------------------- | ------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `unsafe-none`              | Gleich        | Neu                             | Neu                             | Neu                             |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleichherkunftlich | Neu                             | Neu                             |
| `same-origin`              | Neu           | Neu                             | Gleich, wenn gleichherkunftlich | Neu                             |
| `noopener-allow-popups`    | Neu           | Neu                             | Neu                             | Gleich, wenn gleichherkunftlich |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument in einem neuen BCG gemäß den folgenden Regeln geöffnet, die der Reihe nach ausgewertet werden:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in einem neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das Öffnerdokument COOP auf entweder `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => öffne das neue Dokument im gleichen BCG
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigationen) haben => öffne das neue Dokument im gleichen BCG
4. Andernfalls öffne das neue Dokument in einem neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente im gleichen oder einem neuen BCG für die verschiedenen Direktivenwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups` |
| -------------------------- | ------------- | ------------------------------- | ------------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                             | Neu                             | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich, wenn gleichherkunftlich | Neu                             | Neu                     |
| `same-origin`              | Neu           | Neu                             | Gleich, wenn gleichherkunftlich | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                             | Neu                             | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu nutzen, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen. Zudem darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument cross-origin isoliert ist und ob die Funktionen daher eingeschränkt sind:

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

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und Nachrichten zu senden.
- Eine Passwort-Management-Anwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwort"-Anwendung möchten unbedingt sicherstellen, dass diese nicht direkt durch die "Chat"-App geskriptet werden kann, die von Natur aus eine größere XSS-Oberfläche hat.
Der "richtige Weg", um diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markentechnischen Gründen auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht durch ein Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` angeben, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Öffner die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Website muss auch Folgendes tun:

- Fetch-Metadaten verwenden, um gleichherkunftliche Anfragen an die sensiblere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass alle Authentifizierungscookies `HttpOnly` sind.
- Sicherstellen, dass keine Root-Level-Service-Worker von der weniger sensiblen App installiert sind.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` auf der sensibleren App keine sensiblen Informationen an eine andere gleichherkunftliche App preisgeben.
- Sicherstellen, dass die Anmeldeseite auf einem separaten Ursprung bereitgestellt wird, da die Autofill-Funktion des Passwortmanagers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise immer noch im gleichen Prozess wie die weniger sensible App zuweist und sie so anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
