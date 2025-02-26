---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues oberstes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird oder durch das Navigieren auf eine neue Seite, im selben {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} (BCG) oder in einer neuen Browsing-Kontext-Gruppe geöffnet wird.

Wenn es in eine neue BCG geöffnet wird, werden alle Verbindungen zwischen dem neuen Dokument und seinem Opener getrennt, und das neue Dokument kann von seinem Opener prozessisoliert sein. Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf das globale Objekt zuzugreifen, und verhindert somit eine Reihe von sogenannten [XS-Leaks](https://xsleaks.dev/) Angriffen.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht mit [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann. Dies ermöglicht es Ihnen, mehr Kontrolle über die Verweise auf ein Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), welches ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Openers ab und davon, ob das neue Dokument durch eine Navigation geöffnet wird oder mit [`Window.open()`](/de/docs/Web/API/Window/open).

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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontext-Gruppe mit jedem anderen Dokument und kann daher unsicher sein. Es wird verwendet, um ein Dokument von der Verwendung von COOP für die Prozessisolation abzumelden. Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet, es sei denn, das andere Dokument hat auch `unsafe-none` (oder keine COOP-Direktive).

    Mit `Window.open()` geöffnet, öffnen Dokumente mit `unsafe-none` Dokumente mit jedem anderen Wert immer in eine neue BCG. Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Opener die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat. Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleiche Ursprungsdokumente enthalten. Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur in derselben BCG geöffnet und herangezogen, wenn beide Dokumente gleichen Ursprungs sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin) Direktive, außer dass es erlaubt, Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG zu öffnen, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile von Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und einen Verweis darauf behalten muss. Zum Beispiel, wenn ein Cross-Origin-Dienst für OAuth oder Zahlungen verwendet wird.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat. In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder gleicher Standort ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur in derselben BCG geöffnet und herangezogen, wenn beide Dokumente gleichen Ursprungs sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat. Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolation von _gleichartigen_ Dokumenten erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener und isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des Opener-Dokuments. Dies stellt sicher, dass der Opener keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleichen Ursprungs sind.

    Bei Navigationen öffnet ein Dokument mit dieser Direktive andere Dokumente immer in einer neuen BCG, es sei denn, sie sind gleichen Ursprungs und haben die Direktive `noopener-allow-popups`. Mithilfe von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie gleichen Standort oder Cross-Site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleiche Herkunft und vertrauenswürdige Cross-Origin-Ressourcen, die gegenseitig skriptfähig sein müssen, im selben Browser-Kontext geöffnet werden dürfen. Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente im selben BCG oder einem neuen BCG geöffnet werden, nachdem eine Navigation oder das programmgesteuerte Öffnen eines Fensters erfolgt ist.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup" für jedes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, einen Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument im selben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, und ansonsten in einem neuen BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind oder
- kein Dokument `unsafe-none` ist, ihre Richtlinienwerte gleich sind und sie gleichen Ursprungs sind.

Die folgende Tabelle zeigt das Ergebnis dieser Regel, ob Dokumente im selben oder neuen BCG für die verschiedenen Direktiven-Werte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (Zeile) / Geöffnetes (Spalte) | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups`         |
| ------------------------------------ | ------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `unsafe-none`                        | Gleich        | Neu                             | Neu                             | Neu                             |
| `same-origin-allow-popups`           | Neu           | Gleich, wenn gleichen Ursprungs | Neu                             | Neu                             |
| `same-origin`                        | Neu           | Neu                             | Gleich, wenn gleichen Ursprungs | Neu                             |
| `noopener-allow-popups`              | Neu           | Neu                             | Neu                             | Gleich, wenn gleichen Ursprungs |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument je nach den folgenden Regeln im selben BCG geöffnet, die in der Reihenfolge ausgewertet werden:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben für Navigationen dargelegt)
4. Wahr: Andernfalls!

Die folgende Tabelle zeigt das Verhalten des Openers für die verschiedenen Direktiven-Werte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (Zeile) / Geöffnetes (Spalte) | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups` |
| ------------------------------------ | ------------- | ------------------------------- | ------------------------------- | ----------------------- |
| `unsafe-none`                        | Gleich        | Neu                             | Neu                             | Neu                     |
| `same-origin-allow-popups`           | Gleich        | Gleich, wenn gleichen Ursprungs | Neu                             | Neu                     |
| `same-origin`                        | Neu           | Neu                             | Gleich, wenn gleichen Ursprungs | Neu                     |
| `noopener-allow-popups`              | Gleich        | Neu                             | Neu                             | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header auf `require-corp` (oder `credentialless`) setzen. Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist und daher, ob die Funktionen eingeschränkt sind:

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

### Trennung der Opener-Beziehung

Betrachten Sie eine hypothetische Herkunft `example.com`, die zwei sehr unterschiedliche Anwendungen auf derselben Herkunft hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihnen Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Benutzerpasswörter, über verschiedene Dienste hinweg, enthält.

Die Administratoren der "Passwörter"-Anwendung würden sehr gerne sicherstellen, dass sie nicht direkt vom "Chat"-App skriptfähig ist, die aufgrund ihrer Natur eine größere XSS-Oberfläche hat. Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf unterschiedlichen Herkünften zu hosten, aber in einigen Fällen ist das nicht möglich, und die beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einer einzigen Herkunft sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups` Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` anzeigen, dass die Fenster geschlossen sind ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird. Die Website müsste auch Folgendes tun:

- Verwenden Sie Fetch Metadata, um Ursprungsanforderungen an die sensiblere App zu blockieren, die keine Navigationsanforderungen sind.
- Stellen Sie sicher, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Stellen Sie sicher, dass keine Root-Level-Service-Workers von der weniger sensiblen App installiert werden.
- Stellen Sie sicher, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an eine andere gleichartige App freigeben.
- Stellen Sie sicher, dass ihre Login-Seite auf einer separaten Herkunft bereitgestellt wird, da die Autofill-Funktion des Passwortmanagers basierend auf der Herkunft angewendet wird.
- Verstehen Sie, dass der Browser die sensiblere App möglicherweise trotzdem im selben Prozess wie die weniger sensible App allokieren kann, wodurch sie für Spectre-ähnliche Angriffe anfällig wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
