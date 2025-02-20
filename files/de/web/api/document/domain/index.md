---
title: "Document: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ruft den Domain-Teil des {{Glossary("origin", "origin")}} des aktuellen Dokuments ab oder setzt diesen, wie er in der [same-origin policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

### Domain abrufen

Für Code, der auf der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Origins des aktuellen Dokuments zurück. In den meisten Fällen ist dies der Hostname-Teil der URL des Dokuments. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite ein undurchsichtiges {{Glossary("origin", "origin")}} hat, z. B. für eine Seite mit einer [data URL](/de/docs/Web/URI/Reference/Schemes/data), gibt sie einen leeren String zurück.
- Wenn der [Setter](#domain_setzen) von `document.domain` verwendet wurde, wird der Wert zurückgegeben, der gesetzt wurde.

Obwohl der Getter nicht auf die gleiche Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. Damit können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen liefern, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das das vollständige Origin bereitstellt.

### Domain setzen

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um das {{Glossary("origin", "origin")}} einer Seite zu _ändern_ und dadurch zu beeinflussen, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf dieselbe oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn sowohl `https://a.example.com` als auch `https://b.example.com` Folgendes verwenden:

```js
document.domain = "example.com";
```

Dann haben beide ihr Origin so modifiziert, dass sie dieselbe Domain haben, und sie können jetzt direkt auf das DOM des jeweils anderen zugreifen—obwohl dies normalerweise aufgrund von Cross-Origin-Sicherheitsbeschränkungen nicht möglich wäre.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert immer noch das Origin. Zum Beispiel, wenn eine Seite Folgendes setzt:

```js
document.domain = document.domain;
```

Dann wird diese Seite als Cross-Origin zu anderen normalerweise gleich-origin Seiten gewertet, die dies nicht ebenfalls gemacht haben.

#### Veraltete Nutzung

Der `document.domain`-Setter ist veraltet. Er untergräbt die Sicherheitsmechanismen der [same origin policy](/de/docs/Web/Security/Same-origin_policy) und erschwert das Origin-Modell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Er ermöglicht vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains aus, was wahrscheinlich nicht beabsichtigt ist. Außerdem entfernt er die Port-Komponente vom Origin, sodass Ihre Seite jetzt von anderen Seiten mit derselben IP-Adresse oder demselben Hostnamen, selbst auf einem anderen Port, zugänglich gemacht werden kann.

Dies ist besonders unsicher bei Shared Hosting. Wenn beispielsweise ein anderer Shared Hosting-Kunde in der Lage ist, eine Website mit derselben IP-Adresse, aber auf einem anderen Port zu hosten, führt das Setzen von `document.domain` dazu, dass die same-origin protection entfernt wird, die Ihre Site normalerweise vor dem Zugriff durch die Site des anderen Kunden schützt.

Ähnliche Probleme treten bei Shared Hosting-Sites auf, die jedem Kunden eine andere Subdomain zuweisen. Wenn eine Site `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und damit beginnen, auf die Daten der ursprünglichen Site zuzugreifen.

Statt `document.domain` zu verwenden, um Cross-Origin-Kommunikation zu ermöglichen, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an das andere Origin zu senden. Dieser kontrollierte Zugriff über Message-Passing ist weitaus sicherer als das pauschale Aussetzen aller Daten durch `document.domain`.

#### Fehler

Der Setter wird in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- Wenn die {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} deaktiviert ist.
- Wenn das Dokument sich innerhalb eines sandboxed {{htmlelement("iframe")}} befindet.
- Wenn das Dokument keinen {{Glossary("browsing_context", "browsing context")}} besitzt.
- Wenn die [effective domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments `null` ist.
- Wenn der angegebene Wert weder mit dem aktuellen Hostnamen der Seite noch mit einer übergeordneten Domain übereinstimmt.

Ein Beispiel für diesen letzten Fehlerfall wäre ein Versuch, `document.domain` auf `"example.org"` zu setzen, während man sich auf `https://example.com/` befindet—dies würde einen Fehler auslösen.

Außerdem wird dieser Setter, als Teil seiner Veraltung, in Kombination mit bestimmten modernen Isolationsfunktionen keine Wirkung zeigen:

- Wenn er auf einer cross-origin isolierten Seite verwendet wird, also einer Seite, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet.
- Wenn er auf einer origin-isolierten Seite verwendet wird, also einer Seite, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet.

Schließlich ändert das Setzen von `document.domain` nicht das für Origin-Prüfungen von einigen Web-APIs verwendete Origin, wodurch der Subdomain-Zugriff über diesen Mechanismus verhindert wird. Betroffene APIs umfassen (sind aber nicht beschränkt auf): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
