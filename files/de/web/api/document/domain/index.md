---
title: "Dokument: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: e114a6686e813abfcb8f071b18987eb4c1f17ce6
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces holt/setzt den Domain-Teil des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments, wie er von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

### Abrufen der Domain

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z. B. für eine Seite mit einer [Data-URL](/de/docs/Web/URI/Schemes/data), dann wird ein leerer String zurückgegeben.
- Wenn der `document.domain`-[Setter](#setzen_der_domain) verwendet wurde, dann wird der Wert, der gesetzt wurde, zurückgegeben.

Obwohl der Getter nicht auf die gleiche Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`]-Eigenschaft(/de/docs/Web/API/Location/hostname) zu verwenden. So können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den vollständigen Ursprung bereitstellt.

### Setzen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und somit zu beeinflussen, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn `https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihren Ursprung so verändert, dass sie dieselbe Domain haben, und sie können nun direkt auf das DOM des anderen zugreifen — trotz originübergreifend, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert kein No-Op ist. Es ändert dennoch den Ursprung. Zum Beispiel, wenn eine Seite setzt

```js
document.domain = document.domain;
```

dann wird sie als originübergreifend von jeder anderen normalerweise gleichbürtigen Seitenseiten betrachtet, die nicht dasselbe getan haben.

#### Veralterung

Der `document.domain`-Setter ist veraltet. Er untergräbt die Sicherheitsmaßnahmen, die durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bereitgestellt werden, und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Das Setzen von `document.domain` ist gefährlich. Es öffnet den vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Es entfernt auch die Portkomponente vom Ursprung, sodass Ihre Seite nun von anderen Seiten mit derselben IP-Adresse oder derselben Hostkomponente, selbst an einem anderen Port, darauf zugegriffen werden kann.

Dies ist besonders unsicher bei gemeinsam genutztem Hosting. Wenn zum Beispiel ein anderer Kunde des gemeinsamen Hostings in der Lage ist, eine Seite mit derselben IP-Adresse, aber an einem anderen Port zu hosten, dann entfernt das Setzen von `document.domain` den gleichbürtigen Schutz, der Sie normalerweise vor dem Zugriff der anderen Kundenseite auf die Daten Ihrer Seite bewahrt.

Ähnliche Probleme treten bei gemeinsam genutzten Hosting-Seiten auf, die jedem Kunden eine andere Subdomain zuweisen. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und beginnen, auf die Daten der ursprünglichen Seite zuzugreifen.

Anstatt `document.domain` zu verwenden, um die kommunikation über Ursprünge hinweg zu erleichtern, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugriff durch Nachrichtenübermittlung ist viel sicherer als die vollständige Freigabe aller Daten durch `document.domain`.

#### Fehler

Der Setter wirft in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException):

- Die {{httpheader('Permissions-Policy/document-domain','document-domain')}}
  {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich innerhalb eines sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlfall wird ein Versuch, `document.domain` auf `"example.org"` zu setzen, wenn man sich auf `https://example.com/` befindet, einen Fehler werfen.

Zusätzlich wird es als Teil seiner Deprecation nichts tun, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer originübergreifend isolierten Seite verwendet wird, d. h. einer, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Headers verwendet.
- Wenn es auf einer origin-isolierten Seite verwendet wird, d. h. einer, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet.

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für Ursprungsüberprüfungen durch einige Web-APIs verwendet wird, wodurch der Sub-Domain-Zugriff über diesen Mechanismus verhindert wird. Betroffene APIs umfassen (aber sind nicht darauf beschränkt): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
