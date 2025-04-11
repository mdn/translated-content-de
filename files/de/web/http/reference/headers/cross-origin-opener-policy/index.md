---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues oberstes Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder auf eine neue Seite navigiert wird, in derselben {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} (BCG) oder in einer neuen Browsing-Kontextgruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Verbindungen zwischen dem neuen Dokument und seinem Urheber getrennt, und das neue Dokument kann prozess-isoliert von seinem Urheber sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf das globale Objekt zuzugreifen, und verhindert so eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht über [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann.
Dies ermöglicht Ihnen mehr Kontrolle über Referenzen zu einem Fenster als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Urhebers ab und davon, ob das neue Dokument nach einer Navigation oder mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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

### Richtlinien

- `unsafe-none`

  - : Das Dokument erlaubt, seine Browsing-Kontextgruppe mit jedem anderen Dokument zu teilen, und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolation auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet und hinein geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keinen COOP-Richtlinienwert).

    Mit `Window.open()` werden Dokumente mit `unsafe-none` immer in eine neue BCG geöffnet, wenn sie mit einem anderen Wert geöffnet werden.
    Allerdings können Dokumente mit `unsafe-none` in derselben BCG geöffnet werden, wenn der Urheber die Richtlinie `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` öffnet immer ein Dokument mit `unsafe-none` in einer neuen BCG.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originierte Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolierung](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und hinein geöffnet, wenn beide Dokumente gleich-originig sind und die `same-origin`-Richtlinie haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin)-Richtlinie, außer dass sie das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Richtlinie wird verwendet, um die `same-origin`-Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolierung benötigt, aber auch eine Referenz zu vertrauenswürdigen Cross-Origin-Dokumenten öffnen und beibehalten muss.
    Zum Beispiel, wenn ein Cross-Origin-Dienst für OAuth oder Zahlungen verwendet wird.

    Ein Dokument mit dieser Richtlinie kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur in derselben BCG geöffnet und hinein geöffnet, wenn beide Dokumente gleich-originig sind und die `same-origin-allow-popups`-Richtlinie haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Richtlinie werden immer in eine neue BCG geöffnet, außer wenn sie durch eine Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen es notwendig ist, _gleich-originige_ Dokumente prozess-isoliert zu haben.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Urheber und isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des Urheberdokuments.
    Dies stellt sicher, dass der Urheber keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt — selbst wenn sie gleich-originig sind.

    Bei Navigationen wird ein Dokument mit dieser Richtlinie immer andere Dokumente in einer neuen BCG öffnen, es sei denn, sie sind gleich-originig und haben die Richtlinie `noopener-allow-popups`.
    Mit [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Richtlinie Dokumente in eine neue BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie Same-Site oder Cross-Site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-originige und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten können sollen, in derselben Browser-Kontextgruppe geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente nach einer Navigation oder dem programmatischen Öffnen eines Fensters in derselben oder einer neuen BCG geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, unabhängig davon, ob es sich um ein Popup, einen Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in derselben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, und ansonsten in einer neuen BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich und die Dokumente gleich-originig sind.

Die folgende Tabelle zeigt, wie sich diese Regel darauf auswirkt, ob Dokumente in derselben oder einer neuen BCG geöffnet werden, für die verschiedenen Richtlinienwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Urheber (↓) / Geöffnet (→) | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups`      |
| -------------------------- | ------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `unsafe-none`              | Gleich        | Neu                          | Neu                          | Neu                          |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleich-originig | Neu                          | Neu                          |
| `same-origin`              | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                          |
| `noopener-allow-popups`    | Neu           | Neu                          | Neu                          | Gleich, wenn gleich-originig |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß den folgenden Regeln, die in Reihenfolge ausgewertet werden, in einer neuen BCG geöffnet:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in einer neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das öffnende Dokument COOP auf entweder `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => öffne das neue Dokument in derselben BCG
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigationen) haben => öffne das neue Dokument in derselben BCG
4. Ansonsten öffne das neue Dokument in einer neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente für die verschiedenen Richtlinienwerte in derselben oder einer neuen BCG geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Urheber (↓) / Geöffnet (→) | `unsafe-none` | `same-origin-allow-popups`   | `same-origin`                | `noopener-allow-popups` |
| -------------------------- | ------------- | ---------------------------- | ---------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                          | Neu                          | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich, wenn gleich-originig | Neu                          | Neu                     |
| `same-origin`              | Neu           | Neu                          | Gleich, wenn gleich-originig | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                          | Neu                          | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Nutzung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Zudem darf die Funktion nicht durch die {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist, und somit ob die Funktionen eingeschränkt sind:

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

### Trennung der beziehungsstiftung zum Erzeuger

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf demselben Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihnen Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sicherstellen, dass sie nicht direkt von der "Chat"-App skriptiert werden kann, die von Natur aus eine größere XSS-Oberfläche hat.
Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument, das es öffnet, skriptiert werden kann.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, wird der von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` anzeigen, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Erzeuger die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme betrachtet wird.
Die Website müsste auch Folgendes tun:

- Verwenden Sie Fetch-Metadaten, um gleich-originige Anfragen zur sensibleren App zu blockieren, die keine Navigationsanfragen sind.
- Stellen Sie sicher, dass alle Authentifizierungs-Cookies `HttpOnly` sind.
- Stellen Sie sicher, dass root-level Service-Worker nicht von der weniger-sensiblen App installiert werden.
- Stellen Sie sicher, dass `postMessage` oder `BroadcastChannel` auf der mehr-sensiblen App keine sensiblen Informationen an jede andere gleich-originige App preisgeben.
- Stellen Sie sicher, dass die Anmeldeseite auf einem separaten Ursprung bereitgestellt wird, da der Auto-Ausfüllmanager basierend auf dem Ursprung angewendet wird.
- Verstehen Sie, dass der Browser die sensiblere App möglicherweise immer noch im selben Prozess wie die weniger sensible App zuweist, wodurch sie anfällig für Spectre-ähnliche Angriffe wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
