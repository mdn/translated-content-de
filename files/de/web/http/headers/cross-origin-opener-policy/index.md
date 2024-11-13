---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 070ea0f4ceb3264e21253f63647e12a09bbdfd60
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht einer Website zu kontrollieren, ob ein neues oberstes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigation zu einer neuen Seite erfolgt, in der gleichen {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} (BCG) oder in einer neuen Browsing-Kontext-Gruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Verbindungen zwischen dem neuen Dokument und seinem Opener getrennt, und das neue Dokument kann von seinem Opener prozessisoliert sein. Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert nutzen können, um auf das globale Objekt zuzugreifen. Dadurch wird eine Reihe von Cross-Origin-Angriffen, bekannt als [XS-Leaks](https://xsleaks.dev/), verhindert.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht über [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann. Dies gibt Ihnen mehr Kontrolle über Referenzen zu einem Fenster als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), welches ausgehende Navigationen betrifft, jedoch nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Openers ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontext-Gruppe mit jedem anderen Dokument und kann daher unsicher sein. Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolierung auszunehmen. Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in einer neuen BCG geöffnet, es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Bei Verwendung von `Window.open()`, öffnen Dokumente mit `unsafe-none` immer Dokumente mit jedem anderen Wert in einer neuen BCG. Dokumente mit `unsafe-none` können jedoch in der gleichen BCG geöffnet werden, wenn der Opener die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat. Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-herkunftliche Dokumente enthalten. Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur in der gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleich-herkunftlich sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin) Direktive, außer dass es erlaubt, Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) in der gleichen BCG zu öffnen, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und einen Verweis darauf behalten muss. Zum Beispiel beim Verwenden eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in der gleichen BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat. In diesem Fall ist es egal, ob das geöffnete Dokument cross-site oder same-site ist.

    Ansonsten werden Dokumente mit `same-origin-allow-popups` nur in der gleichen BCG geöffnet und geöffnet, wenn beide Dokumente gleich-herkunftlich sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Direktive werden immer in einer neuen BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat. Es wird verwendet, um Fälle zu unterstützen, in denen gleich-herkunftliche Dokumente prozessisoliert werden müssen.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener, wodurch der Browsing-Kontext für das aktuelle Dokument isoliert wird, unabhängig von der Herkunft des Openers. Dies stellt sicher, dass der Opener keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt – selbst wenn sie gleich-herkunftlich sind.

    Bei Navigationen wird ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG öffnen, es sei denn, sie sind gleich-herkunftlich und haben die Direktive `noopener-allow-popups`. Bei Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall ist es egal, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-herkunftliche und vertrauenswürdige Cross-Origin-Ressourcen, die in der Lage sein müssen, sich gegenseitig zu skripten, in der gleichen Browser-Kontext-Gruppe geöffnet werden dürfen. Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente in der gleichen BCG oder in einer neuen BCG geöffnet werden, nachdem eine Navigation oder ein programmatisches Öffnen eines Fensters erfolgt ist.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, sei es ein Popup, Tab, Fenster oder ein anderer Kontext.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in der gleichen BCG geöffnet, wenn die zwei Dokumente "übereinstimmende COOP-Richtlinien" haben, ansonsten in einer neuen BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind, oder
- keines der Dokumente `unsafe-none` ist, ihre Richtlinienwerte sind identisch, und sie sind gleich-herkunftlich.

Die folgende Tabelle zeigt das Ergebnis dieser Regel, ob Dokumente in der gleichen oder einer neuen BCG für die verschiedenen Direktivenwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups`     |
| ---------------------------------- | ------------- | --------------------------- | --------------------------- | --------------------------- |
| `unsafe-none`                      | Gleich        | Neu                         | Neu                         | Neu                         |
| `same-origin-allow-popups`         | Neu           | Gleich wenn gleich-herkunft | Neu                         | Neu                         |
| `same-origin`                      | Neu           | Neu                         | Gleich wenn gleich-herkunft | Neu                         |
| `noopener-allow-popups`            | Neu           | Neu                         | Neu                         | Gleich wenn gleich-herkunft |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument in der gleichen BCG gemäß den folgenden Regeln geöffnet, die der Reihenfolge nach bewertet werden:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben beschrieben für Navigationen)
4. Wahr: Ansonsten!

Die folgende Tabelle zeigt das Opener-Verhalten für die verschiedenen Direktivenwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups` |
| ---------------------------------- | ------------- | --------------------------- | --------------------------- | ----------------------- |
| `unsafe-none`                      | Gleich        | Neu                         | Neu                         | Neu                     |
| `same-origin-allow-popups`         | Gleich        | Gleich wenn gleich-herkunft | Neu                         | Neu                     |
| `same-origin`                      | Neu           | Neu                         | Gleich wenn gleich-herkunft | Neu                     |
| `noopener-allow-popups`            | Gleich        | Neu                         | Neu                         | Neu                     |

## Beispiele

### Bestimmte Funktionen hängen von der Cross-Origin-Isolation ab

Bestimmte Funktionen wie {{jsxref("SharedArrayBuffer")}}-Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern sind nur verfügbar, wenn Ihr Dokument einen COOP-Header mit dem Wert `same-origin` gesetzt hat.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Siehe auch den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header, den Sie ebenfalls auf `require-corp` oder `credentialless` setzen müssen.

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) in Fenster- und Worker-Kontexten testen:

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

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf dem gleichen Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihnen Nachrichten zu senden.
- Eine Passwortverwaltung unter `/passwords`, die alle Passwörter des Benutzers über verschiedene Dienste hinweg enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sicherstellen, dass sie nicht direkt vom "Chat"-App skriptiert werden kann, die ihrer Natur nach eine größere XSS-Oberfläche hat. Die "richtige" Methode, diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten. In einigen Fällen ist dies jedoch nicht möglich, und die zwei Anwendungen müssen aus historischen, geschäftlichen oder Marken-Gründen auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups` Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument skriptiert werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, zeigt das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` an, dass die Fenster geschlossen sind ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme gilt. Die Website müsste auch Folgendes tun:

- Fetch Metadata verwenden, um gleich-herkunftliche Anfragen an die sensiblere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass alle Authentifizierungs-Cookies `HttpOnly` sind.
- Sicherstellen, dass Root-Level-Service-Worker nicht von der weniger sensitiven App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an andere gleich-herkunftliche Apps preisgeben.
- Sicherstellen, dass die Login-Seite unter einem separaten Ursprung bereitgestellt wird, da das Autofill des Passwort-Managers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensiblere App immer noch im gleichen Prozess wie die weniger sensible App zuweisen könnte, wodurch sie anfällig für Angriffe ähnlich zu Spectre wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
