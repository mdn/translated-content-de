---
title: "Dokument: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 43bd841296433b2c1adb8fa9d819212f86b37358
---

{{APIRef("DOM")}}

Die **`domain`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle liest oder setzt den Domain-Teil des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments, der für die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) verwendet wird.

## Wert

Eine Zeichenfolge.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument darf seine Domain nicht setzen, beispielsweise weil es sich in einer Sandbox befindet oder einen undurchsichtigen Ursprung hat. Einzelheiten finden Sie im Abschnitt [Fehlerfälle](#fehlerfälle).

## Beispiele

### Domain auslesen

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, setzt dieses Beispiel `currentDomain` auf die Zeichenfolge `"developer.mozilla.org"`.

```js
const currentDomain = document.domain;
```

Der Getter dieser Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen ist dies der Hostname-Teil der URL des Dokuments. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, etwa bei einer Seite mit einer [data-URL](/de/docs/Web/URI/Reference/Schemes/data), gibt der Getter eine leere Zeichenfolge zurück.
- Wenn der [Setter](#domain_setzen) von `document.domain` verwendet wurde, gibt der Getter den gesetzten Wert zurück.

Obwohl der Getter nicht in derselben Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, stattdessen die Eigenschaft [`Location.hostname`](/de/docs/Web/API/Location/hostname) zu verwenden. So können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls die Zeichenfolge `"developer.mozilla.org"`. Weitere Alternativen, die etwas andere Informationen liefern, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den vollständigen Ursprung liefert.

### Domain setzen

```js
document.domain = domainString;
```

Mit dem Setter dieser Eigenschaft lässt sich der {{Glossary("origin", "Ursprung")}} einer Seite _ändern_ und damit beeinflussen, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Die Eigenschaft kann nur auf dieselbe Domain oder eine übergeordnete Domain gesetzt werden. Wenn beispielsweise sowohl `https://a.example.com` als auch `https://b.example.com` Folgendes verwenden:

```js
document.domain = "example.com";
```

Dann haben beide ihren Ursprung so geändert, dass er dieselbe Domain hat. Sie können nun direkt auf das DOM der jeweils anderen Seite zugreifen – obwohl sie unterschiedliche Ursprünge haben, was einen solchen Zugriff normalerweise verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf den aktuellen Wert nicht wirkungslos ist. Es ändert den Ursprung trotzdem. Wenn eine Seite beispielsweise Folgendes setzt:

```js
document.domain = document.domain;
```

Dann gilt sie gegenüber anderen Seiten, die normalerweise denselben Ursprung hätten, dies aber nicht ebenfalls getan haben, als Seite mit einem anderen Ursprung.

#### Veraltet

Der Setter von `document.domain` ist veraltet. Er untergräbt die Sicherheitsvorkehrungen der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Dadurch erhalten _alle_ Subdomains vollständigen Zugriff auf das DOM einer Seite, was wahrscheinlich nicht beabsichtigt ist. Außerdem wird die Port-Komponente aus dem Ursprung entfernt. Ihre Seite kann dann auch von anderen Seiten mit derselben IP-Adresse oder demselben Host-Teil aus zugegriffen werden, selbst wenn diese einen anderen Port verwenden.

Dies ist besonders bei Shared Hosting unsicher. Ein anderer Kunde desselben Hosting-Anbieters kann beispielsweise eine Website unter derselben IP-Adresse, aber einem anderen Port betreiben. Wenn Sie `document.domain` setzen, entfällt der Schutz durch die Same-Origin-Policy, der normalerweise verhindert, dass die Website dieses Kunden auf die Daten Ihrer Website zugreift.

Ähnliche Probleme treten bei Shared-Hosting-Angeboten auf, die jedem Kunden eine eigene Subdomain zuweisen. Wenn eine Website `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und auf die Daten der ursprünglichen Website zugreifen.

Statt `document.domain` für die Kommunikation zwischen unterschiedlichen Ursprüngen zu verwenden, sollten Sie mit [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) eine asynchrone Nachricht an den anderen Ursprung senden. Dieser kontrollierte Zugriff durch Nachrichtenaustausch ist wesentlich sicherer als die durch `document.domain` verursachte pauschale Offenlegung aller Daten.

#### Fehlerfälle

Der Setter löst in mehreren Fällen eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus:

- Das Dokument befindet sich in einem {{htmlelement("iframe")}} mit Sandbox-Einschränkungen.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert entspricht weder dem aktuellen Hostnamen der Seite noch einer übergeordneten Domain davon.

Ein Beispiel für den letzten Fehlerfall: Wird unter `https://example.com/` versucht, `document.domain` auf `"example.org"` zu setzen, wird eine Ausnahme ausgelöst.

Im Zuge der Einstellung hat das Setzen der Eigenschaft außerdem keine Wirkung, wenn bestimmte moderne Isolationsfunktionen verwendet werden:

- Auf einer [Cross-Origin-isolierten Seite](/de/docs/Web/API/Window/crossOriginIsolated), die also die entsprechenden Werte für die HTTP-Header {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} verwendet.
- Auf einer [Seite in einem nach Ursprung getrennten Agent-Cluster](/de/docs/Web/API/Window/originAgentCluster), bei der der HTTP-Header {{httpheader("Origin-Agent-Cluster")}} auf `?1` gesetzt ist.

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, den einige Web-APIs für Ursprungsprüfungen verwenden. Der Zugriff zwischen Subdomains über diesen Mechanismus ist bei diesen APIs daher nicht möglich. Zu den betroffenen APIs gehören unter anderem [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), die [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
