---
title: Cross-Origin-Opener-Policy (COOP) header
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues Top-Level-Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder zu einer neuen Seite navigiert wird, in derselben {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} (BCG) oder in einer neuen Browsing-Kontextgruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem Öffner getrennt und das neue Dokument kann prozessisoliert von seinem Öffner sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf ihr globales Objekt zuzugreifen, und verhindert damit eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht darauf zugreifen kann, indem [`window.opener`](/de/docs/Web/API/Window/opener) verwendet wird.
Dies ermöglicht es Ihnen, mehr Kontrolle über Referenzen zu einem Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das ausgehende Navigationen betrifft, jedoch nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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
    Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolation auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Beim Verwenden von `Window.open()`, werden Dokumente mit `unsafe-none` immer Dokumente mit jedem anderen Wert in einer neuen BCG öffnen.
    Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`
  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originige Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isoleirung](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originig sind und die Direktive `same-origin` haben.

- `same-origin-allow-popups`
  - : Dies ähnelt der [`same-origin`](#same-origin)-Direktive, mit dem Unterschied, dass es das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Einschränkung zu lockern, wenn ein Dokument die Vorteile der Cross-Origin-Isoleirung benötigt, aber auch vertrauenswürdige Cross-Origin-Dokumente öffnen und referenzieren muss.
    Zum Beispiel beim Verwenden eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originig sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`
  - : Dokumente mit dieser Direktive werden immer in einer neuen BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen es notwendig ist, gleich-originige Dokumente prozesszuisolieren.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner, isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des öffnenden Dokuments.
    Dadurch wird sichergestellt, dass der Öffner keine Skripte in geöffneten Dokumenten und umgekehrt ausführen kann — selbst wenn sie gleich-originig sind.

    Bei Navigationen öffnet ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG, es sei denn, sie sind gleich-originig und haben die Direktive `noopener-allow-popups`.
    Beim Verwenden von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Direktive Dokumente in einer neuen BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie Same-Site oder Cross-Site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-originige und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten müssen, in derselben Browsing-Kontextgruppe geöffnet werden dürfen.
Andere Ressourcen sollten Cross-Origin-isoliert in ihrer eigenen Gruppe sein.

Die folgenden Abschnitte zeigen, ob Dokumente in derselben BCG oder in einer neuen BCG geöffnet werden, nachdem sie navigiert oder programmgesteuert ein Fenster geöffnet haben.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, ein Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in derselben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in eine neue BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleich-originig sind.

Die untenstehende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente in derselben oder einer neuen BCG für die verschiedenen Richtlinienwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups`      |
| -------------------------- | ------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `unsafe-none`              | Gleich        | Neu                          | Neu                          | Neu                          |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleich-originig | Neu                          | Neu                          |
| `same-origin`              | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                          |
| `noopener-allow-popups`    | Neu           | Neu                          | Neu                          | Gleich, wenn gleich-originig |

### Öffnen mit Window.open()

Wenn ein Dokument mit `Window.open()` geöffnet wird, wird das neue Dokument gemäß den folgenden Regeln, die in Reihenfolge ausgewertet werden, in einer neuen BCG geöffnet:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => neues Dokument in einer neuen BCG öffnen
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das öffnende Dokument COOP entweder auf `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => neues Dokument in derselben BCG öffnen
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigationen) haben => neues Dokument in derselben BCG öffnen
4. Andernfalls neues Dokument in einer neuen BCG öffnen

Die untenstehende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente in derselben oder einer neuen BCG für die verschiedenen Richtlinienwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffner (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups` |
| -------------------------- | ------------- | ---------------------------- | ---------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                          | Neu                          | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich, wenn gleich-originig | Neu                          | Neu                     |
| `same-origin`              | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                          | Neu                          | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert sein.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist und ob die Funktionen eingeschränkt sind:

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

Betrachten Sie ein hypothetisches Origin `example.com`, das zwei sehr unterschiedliche Anwendungen auf demselben Origin hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihnen Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers über verschiedene Dienste hinweg enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sicherstellen, dass sie nicht direkt durch die "Chat"-App skriptiert werden kann, die von Natur aus eine größere XSS-Angriffsfläche hat.
Der "richtige Weg", um diese Anwendungen zu isolieren, wäre, sie auf unterschiedlichen Origins zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markentechnischen Gründen auf einem einzigen Origin sein.

Der Header `Cross-Origin-Opener-Policy: noopener-allow-popups` kann verwendet werden, um sicherzustellen, dass ein Dokument nicht durch ein Dokument, das es öffnet, skriptiert werden kann.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwörter-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Website müsste auch folgende Maßnahmen ergreifen:

- Fetch Metadata verwenden, um gleich-originige Anfragen an die sensitivere App, die keine Navigationsanfragen sind, zu blockieren.
- Sicherstellen, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Sicherstellen, dass keine root-level Service-Worker von der weniger sensitiven App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` in der sensibleren App keine sensiblen Informationen an eine andere gleich-originige App weitergeben.
- Sicherstellen, dass ihre Anmeldeseite auf einem separaten Origin bereitgestellt wird, da das Autofill-Passwort des Passwortmanagers auf Basis des Origins angewendet wird.
- Verstehen, dass der Browser dennoch die sensiblere App im selben Prozess wie die weniger sensible App zuordnen kann, wodurch sie anfällig für Spectre-ähnliche Angriffe wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
