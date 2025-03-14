---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: ee0dc07883c52fc84c73046a201a819bb85a83de
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu steuern, ob ein neues Top-Level-Dokument, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigation auf eine neue Seite aufgerufen wird, im selben {{Glossary("Browsing_context", "Browsing-Kontext-Gruppen")}} (BCG) oder in einer neuen Browsing-Kontext-Gruppe geöffnet wird.

Wenn es in einer neuen BCG geöffnet wird, werden alle Referenzen zwischen dem neuen Dokument und seinem Opener getrennt, und das neue Dokument kann prozessisoliert von seinem Opener sein. Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert nutzen können, um auf dessen globales Objekt zuzugreifen. Dadurch wird eine Reihe von Cross-Origin-Angriffen verhindert, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass jedes Dokument, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht darauf zugreifen kann, indem [`window.opener`](/de/docs/Web/API/Window/opener) verwendet wird. Dies ermöglicht es Ihnen, mehr Kontrolle über die Referenzen zu einem Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), welches ausgehende Navigationen, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden, betrifft.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Openers ab und davon, ob das neue Dokument nach einer Navigation oder unter Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontext-Gruppe mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument vom COOP für die Prozessisolation auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in einer neuen BCG geöffnet und geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Richtliniendefintion).

    Bei Verwendung von `Window.open()` werden Dokumente mit `unsafe-none` immer Dokumente mit einem anderen Wert in einer neuen BCG öffnen.
    Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Opener die Anweisung `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleichherkunfts Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleichherkunft sind und die `same-origin` Anweisung haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich der [`same-origin`](#same-origin) Anweisung, außer dass es das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Anweisung wird verwendet, um die `same-origin` Einschränkung zu lockern, für Integrationen, bei denen ein Dokument die Vorteile der Cross-Origin-Isolation benötigt, aber auch ein Referenz zu vertrauenswürdigen Cross-Origin-Dokumenten öffnen und beibehalten muss.
    Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Anweisung kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument Cross-Site oder Same-Site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleichherkunft sind und die `same-origin-allow-popups` Anweisung haben.

- `noopener-allow-popups`

  - : Dokumente mit dieser Anweisung werden immer in einer neuen BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Prozessisolation von _gleichherkunfts_ Dokumenten erforderlich ist.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener, indem der Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des Opener-Dokuments isoliert wird.
    Dies stellt sicher, dass der Opener keine Skripte in den geöffneten Dokumenten ausführen kann und umgekehrt – selbst wenn sie gleichherkunft sind.

    Bei Navigationen wird ein Dokument mit dieser Anweisung immer andere Dokumente in einer neuen BCG öffnen, es sei denn, sie sind gleichherkunft und haben die Anweisung `noopener-allow-popups`.
    Bei Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Anweisung Dokumente in einer neuen BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie gleichseitig oder kreuzseitig sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleichherkunfts und vertrauenswürdige Cross-Origin-Ressourcen, die Skripting erfordern, im selben Browser-Kontext geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente nach einer Navigation oder dem programmgesteuerten Öffnen eines Fensters in derselben BCG oder einer neuen BCG geöffnet werden.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, egal ob es sich um ein Popup, Tab, Fenster oder anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in derselben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in einer neuen BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleichherkunft sind.

Die unten stehende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente für die verschiedenen Richtlinienwerte in derselben oder in einer neuen BCG geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups`     |
| -------------------------- | ------------- | --------------------------- | --------------------------- | --------------------------- |
| `unsafe-none`              | Gleiche       | Neu                         | Neu                         | Neu                         |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleichherkunft | Neu                         | Neu                         |
| `same-origin`              | Neu           | Neu                         | Gleich, wenn gleichherkunft | Neu                         |
| `noopener-allow-popups`    | Neu           | Neu                         | Neu                         | Gleich, wenn gleichherkunft |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument gemäß den folgenden Regeln in einer neuen BCG geöffnet, die in Reihenfolge ausgewertet werden:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => neues Dokument in einer neuen BCG öffnen
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das Opener-Dokument COOP auf entweder `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => neues Dokument in derselben BCG öffnen
3. Wenn das neue Dokument und das öffnende Dokument [übereinstimmende COOP-Richtlinien](#navigationen) haben => neues Dokument in derselben BCG öffnen
4. Andernfalls, neues Dokument in einer neuen BCG öffnen

Die unten stehende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente für die verschiedenen Richtlinienwerte in derselben oder in einer neuen BCG geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups` |
| -------------------------- | ------------- | --------------------------- | --------------------------- | ----------------------- |
| `unsafe-none`              | Gleiche       | Neu                         | Neu                         | Neu                     |
| `same-origin-allow-popups` | Gleiche       | Gleich, wenn gleichherkunft | Neu                         | Neu                     |
| `same-origin`              | Neu           | Neu                         | Gleich, wenn gleichherkunft | Neu                     |
| `noopener-allow-popups`    | Gleiche       | Neu                         | Neu                         | Neu                     |

## Beispiele

### Funktionen, die von der Cross-Origin-Isolation abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}} Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [Cross-Origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} Header auf `require-corp` (oder `credentialless`) setzen.
Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob ein Dokument Cross-Origin isoliert ist und daher, ob die Funktionen eingeschränkt sind:

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

### Das Opener-Verhältnis trennen

Betrachten Sie ein hypothetisches Herkunft `example.com`, das zwei sehr unterschiedliche Anwendungen auf derselben Herkunft hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihm Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwörter`, die alle Passwörter des Benutzers umfasst, über verschiedene Dienste hinweg.

Die Administratoren der "Passwörter"-Anwendung möchten sehr gerne sicherstellen, dass sie nicht direkt von der "Chat"-App geskriptet werden kann, die von Natur aus eine größere XSS-Oberfläche hat.
Die "richtige" Lösung zur Isolation dieser Anwendungen wäre, sie auf verschiedenen Herkünften zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder Markengründen auf einer einzigen Herkunft sein.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups` Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem Dokument geskriptet werden kann, das es öffnet.

Wenn `example.com/passwörter` mit `noopener-allow-popups` bereitgestellt wird, zeigt die `WindowProxy`, die von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegeben wird, an, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes tun:

- Fetch-Metadaten verwenden, um gleichherkunfts Anfragen an die sensiblere App zu blockieren, die keine Navigationsanfragen sind.
- Sicherstellen, dass ihre Authentifizierungscookies alle `HttpOnly` sind.
- Sicherstellen, dass keine root-level Service-Worker von der weniger sensiblen App installiert sind.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` auf der sensibleren App keine sensiblen Informationen an irgendeine andere gleichherkunfts App preisgeben.
- Sicherstellen, dass ihre Login-Seite auf einer separaten Herkunft bereitgestellt wird, da das Autofill des Passwort-Managers basierend auf Herkunft angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise trotzdem im selben Prozess wie die weniger sensible App zuweisen kann und sie anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
