---
title: Cross-Origin-Opener-Policy (COOP) header
short-title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: d0b1c8fc4aa83c8c584a6593b0410adef7b9d4c3
---

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einer Website zu kontrollieren, ob ein neues Top-Level-Dokument, das durch [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet oder durch Navigation zu einer neuen Seite aufgerufen wird, in der gleichen {{Glossary("Browsing_context", "Browsing Context Group")}} (BCG) oder in einer neuen Browsing Context Group geöffnet wird.

Wenn in einer neuen BCG geöffnet, werden alle Verbindungen zwischen dem neuen Dokument und seinem Opener getrennt, und das neue Dokument kann von seinem Opener prozessweise isoliert sein. Dies stellt sicher, dass potenzielle Angreifer nicht Ihre Dokumente mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf dessen globales Objekt zuzugreifen, und verhindert so eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bekannt sind.

Es bedeutet auch, dass jedes Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht darauf zugreifen kann, indem [`window.opener`](/de/docs/Web/API/Window/opener) verwendet wird. Dies ermöglicht Ihnen mehr Kontrolle über Referenzen zu einem Fenster als [`rel=noopener`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was ausgehende Navigationen betrifft, jedoch nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Openers ab und davon, ob das neue Dokument durch eine Navigation oder durch [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

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
  - : Das Dokument erlaubt es, seine Browsing Context Group mit jedem anderen Dokument zu teilen und kann daher unsicher sein. Es wird verwendet, um ein Dokument von der Nutzung von COOP zur Prozessisolierung auszuschließen. Dies ist der Standardwert.

    Bei Navigationen werden Dokumente mit `unsafe-none` immer in einer neuen BCG geöffnet und geöffnet werden - es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keinen COOP-Direktivwert).

    Bei der Nutzung von `Window.open()` werden Dokumente mit `unsafe-none` immer Dokumente mit jedem anderen Wert in einer neuen BCG öffnen. Allerdings können Dokumente mit `unsafe-none` in derselben BCG geöffnet werden, wenn der Opener die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat. Ein Dokument mit `same-origin` wird immer ein Dokument mit `unsafe-none` in einer neuen BCG öffnen.

- `same-origin`
  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleiche Ursprungs-Dokumente enthalten. Dies wird verwendet, um [Cross-Origin-Isolierung](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG bereitzustellen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleichen Ursprungs sind und die `same-origin` Direktive haben.

- `same-origin-allow-popups`
  - : Dies ist ähnlich wie die [`same-origin`](#same-origin) Direktive, außer dass sie das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG erlaubt, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Einschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolierung benötigt, aber auch in der Lage sein muss, vertrauenswürdige Cross-Origin-Dokumente zu öffnen und darauf zu verweisen. Zum Beispiel bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG öffnen, wenn es einen COOP-Wert von `unsafe-none` hat. In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument cross-site oder same-site ist.

    Andernfalls werden Dokumente mit `same-origin-allow-popups` nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleichen Ursprungs sind und die Direktive `same-origin-allow-popups` haben.

- `noopener-allow-popups`
  - : Dokumente mit dieser Direktive werden immer in einer neuen BCG geöffnet, außer wenn sie durch Navigation von einem Dokument geöffnet werden, das ebenfalls `noopener-allow-popups` hat. Sie wird verwendet, um Fälle zu unterstützen, in denen _gleicher Ursprungs_-Dokumente prozessweise isoliert werden müssen.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Opener und isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des Opener-Dokuments. Dies stellt sicher, dass der Opener keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt - auch wenn sie gleichen Ursprungs sind.

    Bei Navigationen wird ein Dokument mit dieser Direktive andere Dokumente immer in einer neuen BCG öffnen, es sei denn, sie sind gleichen Ursprungs und haben die Direktive `noopener-allow-popups`. Bei der Nutzung von [`Window.open()`](/de/docs/Web/API/Window/open) wird ein Dokument mit dieser Direktive Dokumente immer in einer neuen BCG öffnen, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleiche Ursprungs- und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten können müssen, in der gleichen Browsing Context Group geöffnet werden dürfen. Andere Ressourcen sollten in ihrer eigenen Gruppe Cross-Origin-isoliert sein.

Die folgenden Abschnitte zeigen, ob Dokumente in derselben BCG oder einer neuen BCG geöffnet werden, nachdem sie navigiert oder ein Fenster programmgesteuert geöffnet wurde.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um auf jedes Dokument zu verweisen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird, unabhängig davon, ob es sich um ein Popup, einen Tab, ein Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument in derselben BCG geöffnet, wenn die beiden Dokumente "abstimmende COOP-Richtlinien" haben, andernfalls in einer neuen BCG.

Die Richtlinien stimmen überein, wenn entweder beide Dokumente die Richtlinie `unsafe-none` haben oder wenn die Richtlinien gleich sind und die Dokumente gleichen Ursprungs sind.

Die folgende Tabelle zeigt, wie diese Regel beeinflusst, ob Dokumente in derselben oder in einer neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups`         |
| -------------------------- | ------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `unsafe-none`              | Gleich        | Neu                             | Neu                             | Neu                             |
| `same-origin-allow-popups` | Neu           | Gleich, wenn gleichen Ursprungs | Neu                             | Neu                             |
| `same-origin`              | Neu           | Neu                             | Gleich, wenn gleichen Ursprungs | Neu                             |
| `noopener-allow-popups`    | Neu           | Neu                             | Neu                             | Gleich, wenn gleichen Ursprungs |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mit `Window.open()` wird das neue Dokument in einer neuen BCG gemäß den folgenden Regeln geöffnet, die in der angegebenen Reihenfolge ausgewertet werden:

1. Wenn das neue Dokument COOP auf `noopener-allow-popups` gesetzt hat => Öffnen Sie das neue Dokument in einer neuen BCG
2. Wenn das neue Dokument COOP auf `unsafe-none` gesetzt hat und das öffnende Dokument COOP entweder auf `same-origin-allow-popups` oder `noopener-allow-popups` gesetzt hat => Öffnen Sie das neue Dokument in derselben BCG
3. Wenn das neue Dokument und das öffnende Dokument [abstimmende COOP-Richtlinien](#navigationen) haben => Öffnen Sie das neue Dokument in derselben BCG
4. Andernfalls öffnen Sie das neue Dokument in einer neuen BCG

Die folgende Tabelle zeigt, wie diese Regeln beeinflussen, ob Dokumente in derselben oder in einer neuen BCG für die verschiedenen Direktivwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Opener (↓) / Geöffnet (→)  | `unsafe-none` | `same-origin-allow-popups`      | `same-origin`                   | `noopener-allow-popups` |
| -------------------------- | ------------- | ------------------------------- | ------------------------------- | ----------------------- |
| `unsafe-none`              | Gleich        | Neu                             | Neu                             | Neu                     |
| `same-origin-allow-popups` | Gleich        | Gleich, wenn gleichen Ursprungs | Neu                             | Neu                     |
| `same-origin`              | Neu           | Neu                             | Gleich, wenn gleichen Ursprungs | Neu                     |
| `noopener-allow-popups`    | Gleich        | Neu                             | Neu                             | Neu                     |

## Beispiele

### Funktionen, die von der Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Nutzung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, stehen nur zur Verfügung, wenn Ihr Dokument [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen. Darüber hinaus darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument Cross-Origin-isoliert ist und ob die Funktionen daher eingeschränkt sind oder nicht:

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

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr unterschiedliche Anwendungen auf demselben Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die es jedem Benutzer ermöglicht, jeden anderen Benutzer zu kontaktieren und ihm Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sicherstellen, dass sie nicht direkt von der "Chat"-App gescriptet werden kann, welche durch ihre Natur eine größere XSS-Oberfläche hat. Der „richtige Weg“, diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist das nicht möglich, und diese beiden Anwendungen müssen aus historischen, geschäftlichen oder Markengründen auf einem einzigen Ursprung liegen.

Der Header `Cross-Origin-Opener-Policy: noopener-allow-popups` kann verwendet werden, um sicherzustellen, dass ein Dokument nicht durch ein Dokument gescriptet werden kann, das es öffnet.

Wenn `example.com/passwords` mit `noopener-allow-popups` bereitgestellt wird, zeigt das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegebene `WindowProxy` an, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Opener die Passwort-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme betrachtet wird. Die Site müsste auch Folgendes tun:

- Verwenden Sie Fetch-Metadaten, um gleichartige Anfragen an die empfindlichere App zu blockieren, die keine Navigationsanfragen sind.
- Stellen Sie sicher, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Stellen Sie sicher, dass auf Root-Ebene keine Service-Worker von der weniger empfindlichen App installiert werden.
- Stellen Sie sicher, dass `postMessage` oder `BroadcastChannel` in der empfindlicheren App keine sensiblen Informationen an eine andere gleichartige App preisgeben.
- Stellen Sie sicher, dass ihre Anmeldeseite auf einem separaten Ursprung bereitgestellt wird, da das automatische Ausfüllen durch den Passwort-Manager basierend auf dem Ursprung erfolgt.
- Verstehen Sie, dass der Browser die empfindlichere App möglicherweise dennoch im gleichen Prozess wie die weniger empfindliche ausführt, wodurch sie anfällig für Spektre-ähnliche Angriffe ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
