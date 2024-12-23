---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{HTTPSidebar}}

Der HTTP **`Cross-Origin-Opener-Policy`** (COOP) {{Glossary("response_header", "Antwort-Header")}} ermöglicht einer Website, zu kontrollieren, ob ein neues Dokument auf oberster Ebene, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde oder zu dem navigiert wurde, in derselben {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} (BCG) oder in einer neuen Browsing-Kontextgruppe geöffnet wird.

Wenn in einer neuen BCG geöffnet, werden alle Referenzen zwischen dem neuen Dokument und seinem Öffner getrennt, und das neue Dokument kann von seinem Öffner prozessisoliert sein.
Dies stellt sicher, dass potenzielle Angreifer Ihre Dokumente nicht mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen und dann den zurückgegebenen Wert verwenden können, um auf sein globales Objekt zuzugreifen, und verhindert somit eine Reihe von Cross-Origin-Angriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden.

Es bedeutet auch, dass ein Objekt, das von Ihrem Dokument in einer neuen BCG geöffnet wird, nicht mit [`window.opener`](/de/docs/Web/API/Window/opener) darauf zugreifen kann.
Dies ermöglicht es Ihnen, mehr Kontrolle über Verweise auf ein Fenster zu haben als [`rel=noopener`](/de/docs/Web/HTML/Attributes/rel/noopener), welches ausgehende Navigationen betrifft, aber nicht Dokumente, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet werden.

Das Verhalten hängt von den Richtlinien sowohl des neuen Dokuments als auch seines Öffners ab und davon, ob das neue Dokument nach einer Navigation oder mittels [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

  - : Das Dokument erlaubt das Teilen seiner Browsing-Kontextgruppe mit jedem anderen Dokument und kann daher unsicher sein.
    Es wird verwendet, um ein Dokument von der Verwendung von COOP für die Prozessisolierung auszuschließen.
    Dies ist der Standardwert.

    Bei Navigationen öffnen Dokumente mit `unsafe-none` immer und werden in eine neue BCG geöffnet — es sei denn, das andere Dokument hat ebenfalls `unsafe-none` (oder keine COOP-Direktive).

    Bei Verwendung von `Window.open()` öffnen Dokumente mit `unsafe-none` immer Dokumente mit einem anderen Wert in eine neue BCG.
    Dokumente mit `unsafe-none` können jedoch in derselben BCG geöffnet werden, wenn der Öffner die Direktive `same-origin-allow-popups`, `noopener-allow-popups` oder `unsafe-none` hat.
    Ein Dokument mit `same-origin` öffnet immer ein Dokument mit `unsafe-none` in einer neuen BCG.

- `same-origin`

  - : Das Dokument erlaubt das Laden in BCGs, die COOP verwenden und nur gleich-originäre Dokumente enthalten.
    Dies wird verwendet, um [Cross-Origin-Isolierung](/de/docs/Web/API/Window/crossOriginIsolated) für eine BCG zu ermöglichen.

    Dokumente mit `same-origin` werden nur dann in derselben BCG geöffnet und geöffnet, wenn beide Dokumente gleich-originär sind und die `same-origin`-Direktive haben.

- `same-origin-allow-popups`

  - : Dies ist ähnlich zur [`same-origin`](#same-origin)-Direktive, erlaubt jedoch das Öffnen von Dokumenten mit [`Window.open()`](/de/docs/Web/API/Window/open) in derselben BCG, wenn sie einen COOP-Wert von `unsafe-none` haben.

    Die Direktive wird verwendet, um die `same-origin`-Beschränkung für Integrationen zu lockern, bei denen ein Dokument die Vorteile der Cross-Origin-Isolierung benötigt, aber auch ein vertrauenswürdiges Cross-Origin-Dokument öffnen und eine Referenz darauf behalten muss.
    Beispielsweise bei der Verwendung eines Cross-Origin-Dienstes für OAuth oder Zahlungen.

    Ein Dokument mit dieser Direktive kann ein Dokument in derselben BCG mit [`Window.open()`](/de/docs/Web/API/Window/open) öffnen, wenn es einen COOP-Wert von `unsafe-none` hat.
    In diesem Fall spielt es keine Rolle, ob das geöffnete Dokument cross-site oder same-site ist.

    Ansonsten öffnen Dokumente mit `same-origin-allow-popups` nur dann und werden in derselben BCG geöffnet, wenn beide Dokumente gleich-originär sind und die `same-origin-allow-popups`-Direktive haben.

- `noopener-allow-popups` {{experimental_inline}}

  - : Dokumente mit dieser Direktive werden immer in eine neue BCG geöffnet, es sei denn, sie werden durch Navigation von einem Dokument mit `noopener-allow-popups` geöffnet.
    Es wird verwendet, um Fälle zu unterstützen, in denen eine Notwendigkeit besteht, _gleich-originäre_ Dokumente prozessisoliert zu halten.

    Dies trennt die Verbindungen zwischen dem neuen Dokument und seinem Öffner, isoliert den Browsing-Kontext für das aktuelle Dokument unabhängig von der Herkunft des Öffnerdokuments.
    Dies stellt sicher, dass der Öffner keine Skripte in geöffneten Dokumenten ausführen kann und umgekehrt – selbst wenn sie gleich-originär sind.

    Bei Navigationen öffnet ein Dokument mit dieser Direktive immer andere Dokumente in einer neuen BCG, es sei denn, sie sind gleich-originär und haben die Direktive `noopener-allow-popups`.
    Bei Verwendung von [`Window.open()`](/de/docs/Web/API/Window/open) öffnet ein Dokument mit dieser Direktive Dokumente in einer neuen BCG, es sei denn, sie haben `unsafe-none`, und in diesem Fall spielt es keine Rolle, ob sie same-site oder cross-site sind.

## Beschreibung

Im Allgemeinen sollten Sie Ihre Richtlinien so festlegen, dass nur gleich-originäre und vertrauenswürdige Cross-Origin-Ressourcen, die sich gegenseitig skripten müssen, in derselben Browsing-Kontextgruppe geöffnet werden dürfen.
Andere Ressourcen sollten in ihrer eigenen Gruppe cross-origin isoliert werden.

Die folgenden Abschnitte zeigen, ob Dokumente im selben BCG oder einem neuen BCG geöffnet werden, nachdem eine Navigation erfolgt oder ein Fenster programmgesteuert geöffnet wurde.

> [!NOTE]
> Die Spezifikation verwendet den Begriff "Popup", um sich auf jedes Dokument zu beziehen, das mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde, unabhängig davon, ob es sich um ein Popup, Tab, Fenster oder einen anderen Kontext handelt.

### Navigationen

Beim Navigieren zwischen Dokumenten wird das neue Dokument im selben BCG geöffnet, wenn die beiden Dokumente "übereinstimmende COOP-Richtlinien" haben, andernfalls in einem neuen BCG.

Die Richtlinien stimmen überein, wenn:

- beide Dokumente `unsafe-none` sind, oder
- keines der Dokumente `unsafe-none` ist, ihre Richtlinienwerte identisch sind und sie gleich-originär sind.

Die folgende Tabelle zeigt das Ergebnis dieser Regel, ob Dokumente im selben oder einem neuen BCG für die verschiedenen Direktivenwerte geöffnet werden.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#matching-coop -->

| Öffnendes (Reihe) / Geöffnetes (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups`     |
| --------------------------------------- | ------------- | --------------------------- | --------------------------- | --------------------------- |
| `unsafe-none`                           | Gleich        | Neu                         | Neu                         | Neu                         |
| `same-origin-allow-popups`              | Neu           | Gleich wenn gleich-originär | Neu                         | Neu                         |
| `same-origin`                           | Neu           | Neu                         | Gleich wenn gleich-originär | Neu                         |
| `noopener-allow-popups`                 | Neu           | Neu                         | Neu                         | Gleich wenn gleich-originär |

### Öffnen mit Window.open()

Beim Öffnen eines Dokuments mittels `Window.open()`, wird das neue Dokument in der selben BCG gemäß der folgenden Regeln geöffnet, die in der Reihenfolge ausgewertet werden:

1. Wahr: geöffnet `noopener-allow-popups`
2. Falsch: (`opener same-origin-allow-popups` oder `noopener-allow-popups`) und (geöffnetes Dokument ist `unsafe-none`)
3. Falsch: Übereinstimmende COOP-Richtlinien (wie oben für Navigationsprozesse beschrieben)
4. Wahr: Andernfalls!

Die folgende Tabelle zeigt das Öffnungsverhalten für die verschiedenen Direktivenwerte.

<!-- https://html.spec.whatwg.org/multipage/browsers.html#check-browsing-context-group-switch-coop-value-popup -->

| Öffnendes (Reihe) / Geöffnetes (Spalte) | `unsafe-none` | `same-origin-allow-popups`  | `same-origin`               | `noopener-allow-popups` |
| --------------------------------------- | ------------- | --------------------------- | --------------------------- | ----------------------- |
| `unsafe-none`                           | Gleich        | Neu                         | Neu                         | Neu                     |
| `same-origin-allow-popups`              | Gleich        | Gleich wenn gleich-originär | Neu                         | Neu                     |
| `same-origin`                           | Neu           | Neu                         | Gleich wenn gleich-originär | Neu                     |
| `noopener-allow-popups`                 | Gleich        | Neu                         | Neu                         | Neu                     |

## Beispiele

### Funktionen, die von Cross-Origin-Isolierung abhängen

Bestimmte Funktionen, wie der Zugriff auf {{jsxref("SharedArrayBuffer")}}-Objekte oder die Verwendung von [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern, sind nur verfügbar, wenn Ihr Dokument [cross-origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) ist.

Um diese Funktionen in einem Dokument zu verwenden, müssen Sie den COOP-Header auf `same-origin` und den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-Header auf `require-corp` (oder `credentialless`) setzen.
Zusätzlich darf die Funktion nicht durch {{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} blockiert werden.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob ein Dokument cross-origin isoliert ist und damit ob die Funktionen eingeschränkt sind oder nicht:

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

### Trennung der Öffner-Beziehung

Betrachten Sie einen hypothetischen Ursprung `example.com`, der zwei sehr verschiedene Anwendungen auf demselben Ursprung hat:

- Eine Chat-Anwendung unter `/chat`, die jedem Benutzer ermöglicht, mit jedem anderen Benutzer zu kommunizieren und Nachrichten zu senden.
- Eine Passwortverwaltungsanwendung unter `/passwords`, die alle Passwörter des Benutzers für verschiedene Dienste enthält.

Die Administratoren der "Passwörter"-Anwendung möchten sicherstellen, dass sie nicht direkt von der "Chat"-App geskriptet werden kann, die aufgrund ihrer Natur eine größere XSS-Angriffsfläche hat.
Der "richtige Weg", diese Anwendungen zu isolieren, wäre, sie auf verschiedenen Ursprüngen zu hosten, aber in einigen Fällen ist dies nicht möglich, und diese beiden Anwendungen müssen möglicherweise aus historischen, geschäftlichen oder markenbezogenen Gründen auf einem einzigen Ursprung verbleiben.

Der `Cross-Origin-Opener-Policy: noopener-allow-popups`-Header kann verwendet werden, um sicherzustellen, dass ein Dokument nicht von einem geöffneten Dokument geskriptet werden kann.

Wenn `example.com/passwords` mit `noopener-allow-popups` bedient wird, zeigt das `WindowProxy`-Objekt, das von [`Window.open()`](/de/docs/Web/API/Window/open) zurückgegeben wird, an, dass das Fenster geschlossen ist ([`Window.closed`](/de/docs/Web/API/Window/closed) ist `true`), sodass der Öffner die Passwörter-App nicht skripten kann:

```js
const handle = window.open("example.com/passwords", "passwordTab");
if (windowProxy.closed) {
  // The new window is closed so it can't be scripted.
}
```

Beachten Sie, dass dies allein nicht als ausreichende Sicherheitsmaßnahme angesehen wird.
Die Seite müsste auch Folgendes tun:

- Verwenden von Fetch Metadata, um gleich-originäre Anfragen zu blockieren, die keine Navigationsanfragen an die sensiblere App sind.
- Sicherstellen, dass ihre Authentifizierungs-Cookies alle `HttpOnly` sind.
- Sicherstellen, dass root-level-Service-Worker nicht von der weniger sensiblen App installiert werden.
- Sicherstellen, dass `postMessage` oder `BroadcastChannel` auf der sensibleren App keine sensiblen Informationen an andere gleich-originäre Apps preisgibt.
- Sicherstellen, dass ihre Login-Seite auf einem separaten Ursprung bereitgestellt wird, da die Autofill-Funktion des Passwortmanagers basierend auf dem Ursprung angewendet wird.
- Verstehen, dass der Browser die sensiblere App möglicherweise dennoch im selben Prozess wie die weniger sensible App allokieren kann, was sie anfällig für Spectre-ähnliche Angriffe macht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
