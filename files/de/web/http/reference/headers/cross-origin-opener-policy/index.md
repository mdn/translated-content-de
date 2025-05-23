---
title: Cross-Origin-Opener-Policy (COOP) header
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Webseite, zu kontrollieren, ob ein neues Dokument auf oberster Ebene, geöffnet durch [`Window.open()`](/de/docs/Web/API/Window/open) oder durch Navigation zu einer neuen Seite, in der gleichen {{Glossary("Browsing_context", "Browsing Context Group")}} (BCG) oder in einer neuen Browsing Context Group geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden jegliche Referenzen zwischen dem neuen Dokument und seinem „Opener“ getrennt, und das neue Dokument kann prozessisolation von seinem „Opener“ erfahren. Dies stellt sicher, dass potenzielle Angreifer nicht Ihre Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert nutzen können, um auf deren globale Objekte zuzugreifen, und verhindert dadurch eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Es bedeutet auch, dass jedes Objekt, das durch Ihr Dokument in einer neuen BCG geöffnet wird, nicht auf dieses über [`window.opener`](/de/docs/Web/API/Window/opener) zugreifen kann. Dies gibt Ihnen mehr Kontrolle über Fensterreferenzen als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das ausgehende Navigationen betrifft, aber keine Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines „Openers“ ab, und davon, ob das neue Dokument nach einer Navigation oder durch [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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

  - : Das Dokument erlaubt das Teilen seiner Browsing Context Group mit jedem anderen Dokument und kann daher unsicher sein. Es wird verwendet, um ein Dokument von der Nutzung von COOP für die Prozessisolation auszuschließen. Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet und geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Bei der Nutzung von `Window.open()` werden Dokumente mit `unsafe-none` stets Dokumente mit jedem anderen Wert in eine neue BCG öffnen. Allerdings können Dokumente mit `unsafe-none` in der gleichen BCG geöffnet werden, wenn der Opener die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat. Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in eine neue BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-origin-Dokumente enthalten. Dies wird verwendet, um [cross-origin isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in der gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleich-origin sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin) Direktive, außer dass es das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in der gleichen BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin` Einschränkung in Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch ein vertrauenswürdiges Cross-Origin-Dokument öffnen und eine Referenz darauf behalten muss. Zum Beispiel bei der Nutzung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in der gleichen BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat. Dabei spielt es keine Rolle, ob das geöffnete Dokument cross-site oder same-site ist.

    Ansonsten werden Dokumente mit `same-origin-allow-popups` nur dann in der gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleich-origin sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat. Es wird verwendet, um Fälle zu unterstützen, in denen es notwendig ist, gleich-Origin-Dokumente prozessmäßig zu isolieren.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener, isoliert den Browsing-Kontext für das aktuelle Dokument, unabhängig von der Herkunft des Opener-Dokuments. Dies stellt sicher, dass der Opener keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleich-origin sind.

    Bei Navigationen wird ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG öffnen, es sei denn, sie sind gleich-origin und haben die Direktive `noopener-allow-popups`. Bei der Nutzung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-origin und vertrauenswürdige Cross-Origin-Ressourcen, die Skripting untereinander durchführen müssen, in der gleichen Browsing-Kontext-Gruppe geöffnet werden dürfen. Andere Ressourcen sollten in ihrer eigenen Gruppe cross-origin-isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente nach einer Navigation oder dem programmatischen Öffnen eines Fensters in der gleichen oder einer neuen BCG geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, egal ob es sich um ein Popup, Tab, Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Wechseln zwischen Dokumenten wird das neue Dokument in der gleichen BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in einer neuen BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleich-origin sind.

Die folgende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente für die verschiedenen Direktivwerte in der gleichen oder einer neuen BCG geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups`   |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ------------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                       | Neu                       |
| `same-origin-allow-popups` | Neu           | Gleich wenn gleich-origin  | Neu                       | Neu                       |
| `same-origin`              | Neu           | Neu                        | Gleich wenn gleich-origin | Neu                       |
| `noopener-allow-popups`    | Neu           | Neu                        | Neu                       | Gleich wenn gleich-origin |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß der folgenden Regeln in einer neuen BCG geöffnet, die in der angegebenen Reihenfolge ausgewertet werden:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in einer neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das Opener-Dokument COOP entweder auf `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in der gleichen BCG
3. Wenn das neue Dokument und das öffnende Dokument [zusammenpassende COOP-Richtlinien](#navigationen) haben => öffne das neue Dokument in der gleichen BCG
4. Andernfalls öffne das neue Dokument in einer neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente für die verschiedenen Direktivwerte in der gleichen oder einer neuen BCG geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups` | `same-origin`             | `noopener-allow-popups` |
| -------------------------- | ------------- | -------------------------- | ------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                        | Neu                       | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich wenn gleich-origin  | Neu                       | Neu                     |
| `same-origin`              | Neu           | Neu                        | Gleich wenn gleich-origin | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                        | Neu                       | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolation abhängen

Einige Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen. Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob ein Dokument cross-origin isoliert ist und ob die Funktionen eingeschränkt sind:

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

### Aufheben der „Opener“-Beziehung

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf dem gleichen Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, mit jedem anderen Benutzer zu kommunizieren und Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sehr sicherstellen, dass sie nicht direkt durch die "Chat"-App gescriptet werden kann, die naturgemäß eine größere XSS-Oberfläche hat. Der „richtige Weg“, diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in manchen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung sein.

Der Header `Cross-Origin-Opener-Policy: noopener-allow-popups` kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument gescriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der `WindowProxy`, der durch [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegeben wird, anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der „Opener“ die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird. Die Seite müsste auch Folgendes tun:

- Fetch-Metadaten verwenden, um gleich-Origin-Anfragen an die sensiblerer App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Sicherstellen, dass auf Root-Ebene keine Service-Workers von der weniger sensiblen App installiert sind.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an andere gleich-origin Apps preisgeben.
- Sicherstellen, dass ihre Login-Seite auf einem separaten Ursprung bereitgestellt wird, da das automatische Ausfüllen von Passwort-Managern basierend auf dem Ursprung erfolgt.
- Verstehen, dass der Browser die sensiblere App möglicherweise immer noch im gleichen Prozess wie die weniger sensible ausführt, was sie anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
