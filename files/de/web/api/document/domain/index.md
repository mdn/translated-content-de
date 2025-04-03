---
title: "Dokument: domain Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`** Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces erhält/setzt den Domain-Teil des {{Glossary("origin", "Origin")}} des aktuellen Dokuments, wie es von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Verwendung dieses Features wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

### Abrufen der Domain

Bei Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` läuft, würde dieses Beispiel `currentDomain` auf die Zeichenkette `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter dieser Eigenschaft gibt den Domain-Teil des Origins des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite ein opakes {{Glossary("origin", "Origin")}} hat, z.B. für eine Seite mit einer [Data-URL](/de/docs/Web/URI/Reference/Schemes/data), dann wird der leere String zurückgegeben.
- Wenn der `document.domain` [Setter](#festlegen_der_domain) verwendet wurde, wird der gesetzte Wert zurückgegeben.

Obwohl der Getter nicht gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft anstelle dessen zu verwenden. So kann `document.domain` vollständig vermieden werden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web`, ist `currentHostname` ebenfalls die Zeichenkette `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das das vollständige Origin bereitstellt.

### Festlegen der Domain

```js
document.domain = domainString;
```

Der Setter dieser Eigenschaft kann verwendet werden, um das {{Glossary("origin", "Origin")}} einer Seite zu _ändern_ und damit zu modifizieren, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Es kann nur auf dieselbe oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn sowohl `https://a.example.com` als auch `https://b.example.com` verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihr Origin modifiziert, um dieselbe Domain zu haben, und können nun direkt auf die DOM des anderen zugreifen – trotz Cross-Origin, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert trotzdem das Origin. Zum Beispiel, wenn eine Seite

```js
document.domain = document.domain;
```

einstellt, wird sie als cross-origin von jeder anderen normalerweise gleichen Origin-Seite betrachtet, die nicht dasselbe getan hat.

#### Veraltung

Der `document.domain` Setter ist veraltet. Er untergräbt die durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) gebotenen Sicherheitsmechanismen und kompliziert das Origin-Modell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Es ermöglicht den vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Es entfernt auch die Portkomponente des Origin, sodass Ihre Seite jetzt von anderen Seiten mit derselben IP-Adresse oder derselben Host-Komponente, selbst auf einem anderen Port, zugänglich ist.

Dies ist besonders unsicher bei Shared Hosting. Zum Beispiel könnte ein anderer Shared-Hosting-Kunde in der Lage sein, eine Seite mit derselben IP-Adresse aber auf einem anderen Port zu hosten. In diesem Fall würde das Setzen von `document.domain` den Schutz der gleichen Origin entfernen, der Sie normalerweise davor schützt, dass die Seite des anderen Kunden auf Ihre Daten zugreift.

Ähnliche Probleme treten bei Shared-Hosting-Websites auf, die jedem Kunden eine andere Subdomain geben. Wenn eine Website `document.domain` setzt, kann nun jeder andere Kunde auf einer anderen Subdomain dasselbe tun und auf die Daten der ursprünglichen Website zugreifen.

Anstatt `document.domain` zu verwenden, um Cross-Origin-Kommunikation zu ermöglichen, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an das andere Origin zu senden. Dieser kontrollierte Zugriff über Nachrichtenübermittlung ist viel sicherer als die pauschale Datenfreigabe durch `document.domain`.

#### Fehlerfälle

Der Setter wird in mehreren Fällen eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen:

- Der {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [wirksame Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlerfall würde der Versuch, `document.domain` auf `"example.org"` zu setzen, während man sich auf `https://example.com/` befindet, einen Fehler erzeugen.

Außerdem wird es als Teil seiner Veraltung bei der Kombination mit bestimmten modernen Isolationsfunktionen nichts tun:

- Wenn es auf einer Cross-Origin isolierten Seite verwendet wird, d.h. einer, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet
- Wenn es auf einer Origin-isolierten Seite verwendet wird, d.h. einer, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet

Zum Schluss ändert das Setzen von `document.domain` nicht das Origin, das von einigen Web-APIs für Origin-Prüfungen verwendet wird. Dies verhindert den Zugriff auf Sub-Domains über diesen Mechanismus. Betroffene APIs sind unter anderem: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
