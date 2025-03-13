---
title: "Dokument: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces erhält/legt den Domain-Teil des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments fest, wie er durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde von einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert.

## Beispiele

### Abrufen der Domain

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z. B. für eine Seite mit einer [Daten-URL](/de/docs/Web/URI/Reference/Schemes/data), wird sie den leeren String zurückgeben.
- Wenn der `document.domain` [Setter](#setzen_der_domain) verwendet wurde, wird er den gesetzten Wert zurückgeben.

Obwohl der Getter nicht auf die gleiche Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. So können Sie `document.domain` ganz vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port enthält, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den vollständigen Ursprung liefert.

### Setzen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und so festzulegen, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Wenn z. B. sowohl `https://a.example.com` als auch `https://b.example.com` verwenden

```js
document.domain = "example.com";
```

haben sie beide ihren Ursprung so modifiziert, dass sie die gleiche Domain haben, und können nun direkt auf das DOM des anderen zugreifen — trotz Cross-Origin, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf den aktuellen Wert keine No-Op ist. Es ändert dennoch den Ursprung. Wenn zum Beispiel eine Seite

```js
document.domain = document.domain;
```

setzt, wird sie von anderen normalerweise gleichen Ursprungseiten, die dasselbe nicht getan haben, als Cross-Origin gezählt.

#### Veraltet

Der `document.domain`-Setter ist veraltet. Er untergräbt die von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bereitgestellten Sicherheitsmaßnahmen und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Er ermöglicht einen uneingeschränkten Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Außerdem entfernt er die Portkomponente vom Ursprung, sodass Ihre Seite von anderen Seiten mit derselben IP-Adresse oder demselben Hostkomponenten aufgerufen werden kann, selbst auf einem anderen Port.

Dies ist besonders unsicher bei Shared Hosting. Wenn beispielsweise ein anderer Shared-Hosting-Kunde eine Seite unter derselben IP-Adresse, jedoch auf einem anderen Port hosten kann, entfernt das Setzen von `document.domain` den Schutz der Same-Origin Policy, der Sie normalerweise vor dem Zugriff der anderen Kundenseite auf die Daten Ihrer Seite schützt.

Ähnliche Probleme treten bei Shared-Hosting-Seiten auf, die jedem Kunden eine andere Subdomain geben. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und auf die Daten der ursprünglichen Seite zugreifen.

Anstatt `document.domain` zu verwenden, um die Cross-Origin-Kommunikation zu erleichtern, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugang über Nachrichtenübertragung ist viel sicherer als die uneingeschränkte Freigabe aller Daten durch `document.domain`.

#### Fehler

Der Setter wirft in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException):

- Der {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der gegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Ein Beispiel für diesen letzten Fehlfall: Wenn versucht wird, `document.domain` auf `"example.org"` zu setzen, während man sich auf `https://example.com/` befindet, wird ein Fehler ausgelöst.

Zusätzlich wird im Rahmen der Veraltung nichts mehr passieren, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer vollständig isolierten Seite verwendet wird, d. h. auf einer Seite, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet
- Wenn es auf einer ursprungsisolierten Seite verwendet wird, d. h. auf einer Seite, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für Ursprungs-Überprüfungen durch einige Web-APIs verwendet wird, was den Unterdomänenzugang über diesen Mechanismus verhindert. Betroffene APIs sind (unter anderem): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
