---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues Top-Level-Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigation zu einer neuen Seite aufgerufen wird, in derselben {{Glossary("Browsing_context", "Browsing Context Group")}} (BCG) oder in einer neuen Browsing Context Group geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem "Opener" getrennt, und das neue Dokument könnte prozessisoliert von seinem "Opener" sein. Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf das globale Objekt zuzugreifen, und verhindert so eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht über [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann. Dies ermöglicht Ihnen mehr Kontrolle über Verweise auf ein Fenster als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), das ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines "Openers" ab und davon, ob das neue Dokument durch eine Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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

### Anweisungen

- `unsafe-none`

  - : Das Dokument erlaubt das Teilen seiner Browsing Context Group mit jedem anderen Dokument und kann daher unsicher sein. Es wird verwendet, um ein Dokument von der Nutzung von COOP für die Prozessisolation auszuschließen. Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet — es sei denn, das andere Dokument hat auch `unsafe-none` (oder keinen COOP-Richtlinienwert).

    Bei der Nutzung von `Window.open()`, öffnen Dokumente mit `unsafe-none` immer Dokumente mit einem beliebigen anderen Wert in eine neue BCG. Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der "Opener" die Anweisung `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat. Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in eine neue BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originige Dokumente enthalten. Dies wird verwendet, um eine [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG zu bieten.

    Dokumente mit `same-origin` werden nur in derselben BCG geöffnet und geöffnete, wenn beide Dokumente gleich-originig sind und die Richtlinie `same-origin` haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin) Richtlinie, außer dass es das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Richtlinie wird verwendet, um die `same-origin` Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und referenzieren muss. Zum Beispiel beim Einsatz eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Richtlinie kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat. In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur in derselben BCG geöffnet und geöffnete, wenn beide Dokumente gleich-originig sind und die `same-origin-allow-popups` Richtlinie haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Richtlinie werden immer in eine neue BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat. Es wird verwendet, um Fälle zu unterstützen, in denen es erforderlich ist, _gleich-originige_ Dokumente prozesszuisolieren.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem "Opener", isoliert den Browsing Context für das aktuelle Dokument unabhängig vom Ursprungsdokument des "Openers". Dadurch wird sichergestellt, dass der "Opener" keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — auch wenn sie gleich-originig sind.

    Bei Navigationen öffnet ein Dokument mit dieser Richtlinie immer andere Dokumente in eine neue BCG, es sei denn, sie sind gleich-originig und haben die Richtlinie `noopener-allow-popups`. Bei der Nutzung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Richtlinie Dokumente in eine neue BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie Same-Site oder Cross-Site sind.

## Beschreibung

Allgemein sollten Sie Ihre Richtlinien so einstellen, dass nur gleich-originige und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten können müssen, im selben Browsing Context Group geöffnet werden dürfen. Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente im selben BCG oder in einem neuen BCD geöffnet werden, nachdem eine Navigation oder ein Fenster programmgesteuert geöffnet wurde.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, Tab, Fenster oder einen anderen Kontext handelt.

### Navigationen

Wenn zwischen Dokumenten navigiert wird, wird das neue Dokument im selben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in eine neue BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind, oder
- keines der Dokumente `unsafe-none` ist, ihre Richtlinienwerte gleich sind und sie gleich-originig sind.

Die Tabelle unten zeigt das Ergebnis dieser Regel, ob Dokumente im selben oder einem neuen BCG für die verschiedenen Richtlinienwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups`      |
| ---------------------------------- | ------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `unsafe-none`                      | Gleich        | Neu                          | Neu                          | Neu                          |
| `same-origin-allow-popups`         | Neu           | Gleich, wenn gleich-originig | Neu                          | Neu                          |
| `same-origin`                      | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                          |
| `noopener-allow-popups`            | Neu           | Neu                          | Neu                          | Gleich, wenn gleich-originig |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument in derselben BCG gemäß den folgenden Regeln geöffnet, die in der Reihenfolge geprüft werden:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben für Navigationen dargestellt)
4. Wahr: Ansonsten!

Die Tabelle unten zeigt das Verhalten des Openers für die verschiedenen Richtlinienwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (Zeile) / Geöffnet (Spalte) | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups` |
| ---------------------------------- | ------------- | ---------------------------- | ---------------------------- | ----------------------- |
| `unsafe-none`                      | Gleich        | Neu                          | Neu                          | Neu                     |
| `same-origin-allow-popups`         | Gleich        | Gleich, wenn gleich-originig | Neu                          | Neu                     |
| `same-origin`                      | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                     |
| `noopener-allow-popups`            | Gleich        | Neu                          | Neu                          | Neu                     |

## Beispiele

### Funktionen, die von der Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu nutzen, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen. Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist und ob die Funktionen daher eingeschränkt sind:

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

Betrachten Sie eine hypothetische Herkunft `example.com`, die zwei sehr unterschiedliche Anwendungen auf derselben Herkunft hat:

- Eine Chat-Anwendung auf `/chat`, die es jedem Benutzer ermöglicht, mit jedem anderen Benutzer in Kontakt zu treten und Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung auf `/passwords`, die alle Passwörter des Benutzers über verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten unbedingt sicherstellen, dass sie nicht direkt von der "Chat"-App geskriptet werden kann, die aufgrund ihrer Natur eine größere XSS-Oberfläche hat. Der "richtige Weg", um diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich und diese beiden Anwendungen müssen aufgrund historischer, geschäftlicher oder brandbezogener Gründe auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwörter-App nicht scripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme gilt. Die Seite muss auch Folgendes tun:

- Fetch Metadata verwenden, um gleich-originige Anfragen zu der sensibleren App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass alle Authentifizierungs-Cookies `HttpOnly` sind.
- Sicherstellen, dass keine Root-Level-Service-Worker von der weniger sensiblen App installiert sind.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an eine andere gleich-originige App preisgeben.
- Sicherstellen, dass ihre Anmeldeseite auf einem separaten Ursprung bereitgestellt wird, da die Autofill-Funktion des Passwortmanagers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise immer noch im selben Prozess wie die weniger sensible anordnet, wodurch sie anfällig für Spectre-ähnliche Angriffe wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
