---
title: "Dokument: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: 76fad73c0ae10d227ce77351954ee9a990b97208
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ermöglicht das Abrufen oder Setzen des Domain-Anteils des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments, wie er von der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Dem Dokument ist es untersagt, seine Domain zu setzen, beispielsweise weil es sandboxed ist oder einen undurchsichtigen Ursprung hat. Weitere Informationen finden Sie im Abschnitt [Fehler](#fehler).

## Beispiele

### Abrufen der Domain

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Anteil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Anteil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z. B. für eine Seite mit einer [Data-URL](/de/docs/Web/URI/Reference/Schemes/data), wird der leere String zurückgegeben.
- Wenn der `document.domain`-[Setter](#setzen_der_domain) verwendet wurde, wird der gesetzte Wert zurückgegeben.

Auch wenn der Getter nicht in der gleichen Weise gefährlich ist wie der Setter, ist es vermutlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. So können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), die den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), die den vollständigen Ursprung bereitstellt.

### Setzen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und damit die Art und Weise, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Wenn beispielsweise `https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihren Ursprung so modifiziert, dass sie die gleiche Domain haben, und können nun direkt auf das DOM des anderen zugreifen – trotz der normalerweise verhinderten Cross-Origin-Beschränkungen.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert immer noch den Ursprung. Wenn beispielsweise eine Seite

```js
document.domain = document.domain;
```

setzt, wird sie von anderen normalerweise gleichartigen Seiten als Cross-Origin angesehen, die nicht dasselbe getan haben.

#### Veraltung

Der `document.domain` Setter ist veraltet. Er untergräbt die Sicherheitsschutzmaßnahmen, die von der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) bereitgestellt werden, und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Es öffnet den vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains aus, was wahrscheinlich nicht beabsichtigt ist. Außerdem wird die Portkomponente vom Ursprung entfernt, sodass Ihre Seite nun von anderen Seiten mit derselben IP-Adresse oder demselben Hostkomponenten erreicht werden kann, sogar auf einem anderen Port.

Dies ist besonders unsicher bei gemeinsam genutztem Hosting. Wenn ein anderer Kunde im selben Hosting eine Seite unter derselben IP-Adresse, aber auf einem anderen Port hostet, entfernt das Setzen von `document.domain` den Schutz durch die gleiche Ursprungsrichtlinie, die normalerweise schützt, dass die Website des anderen Kunden auf die Daten Ihrer Website zugreift.

Ähnliche Probleme entstehen bei gemeinsam genutzten Hosting-Seiten, die jedem Kunden eine andere Subdomain geben. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und damit die Daten der ursprünglichen Seite zugreifen.

Statt `document.domain` zu verwenden, um die Kommunikation über verschiedene Ursprünge zu erleichtern, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugriff durch Nachrichtenaustausch ist viel sicherer als die umfassende Freigabe aller Daten durch `document.domain`.

#### Fehler

Der Setter wird in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite, noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlerfall wird der Versuch, `document.domain` auf `"example.org"` zu setzen, wenn man auf `https://example.com/` ist, zu einem Fehler führen.

Zusätzlich wird es im Rahmen seiner Veraltung nichts bewirken, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer plattformübergreifend isolierten Seite verwendet wird, d.h. eine Seite, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}}- und {{httpheader("Cross-Origin-Embedder-Policy")}}-HTTP-Header verwendet.
- Wenn es auf einer ursprungsisolierten Seite verwendet wird, d.h. eine Seite, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}}-HTTP-Header verwendet.

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der bei Ursprungsüberprüfungen durch einige Web-APIs verwendet wird, was den Zugriff auf Subdomains über diesen Mechanismus verhindert. Betroffene APIs sind (aber nicht beschränkt auf): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
