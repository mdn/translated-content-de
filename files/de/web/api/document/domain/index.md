---
title: "Document: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces erhält/legt den Domain-Teil des [Ursprungs](/de/docs/Glossary/origin) des aktuellen Dokuments fest, wie er von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Nutzung dieses Features wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

### Abrufen der Domain

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` läuft, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen [Ursprung](/de/docs/Glossary/origin) hat, z.B. für eine Seite mit einer [Data-URL](/de/docs/Web/URI/Schemes/data), wird der leere String zurückgegeben.
- Wenn der `document.domain` [Setter](#festlegen_der_domain) verwendet wurde, wird der gesetzte Wert zurückgegeben.

Obwohl der Getter nicht in derselben Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, stattdessen die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. Dann können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), die den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), die den vollständigen Ursprung bereitstellt.

### Festlegen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den [Ursprung](/de/docs/Glossary/origin) einer Seite zu _ändern_ und somit zu modifizieren, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Er kann nur auf dieselbe oder eine übergeordnete Domain gesetzt werden. Beispielsweise, wenn `https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben beide ihren Ursprung geändert, um dieselbe Domain zu haben, und sie können jetzt direkt auf das DOM des anderen zugreifen—trotz der Tatsache, dass sie cross-origin sind, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es verändert dennoch den Ursprung. Wenn zum Beispiel eine Seite einstellt

```js
document.domain = document.domain;
```

dann wird sie als cross-origin von allen anderen normalerweise gleichen Ursprungseiten gezählt, die nicht dasselbe getan haben.

#### Veraltungsankündigung

Der `document.domain`-Setter ist veraltet. Er untergräbt den Sicherheitsmechanismus der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führen kann.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Es öffnet vollständigen Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Es entfernt auch die Port-Komponente vom Ursprung, sodass Ihre Seite nun von anderen Seiten mit derselben IP-Adresse oder derselben Host-Komponente, selbst auf einem anderen Port, aufgerufen werden kann.

Dieses ist besonders unsicher bei gemeinsam genutztem Hosting. Beispielsweise kann ein anderer Kunde beim gemeinsamen Hosting eine Seite an derselben IP-Adresse, jedoch auf einem anderen Port hosten, wodurch das Einstellen von `document.domain` den Schutz im selben Ursprung entfernen würde, der normalerweise verhindert, dass die andere Kundenseite auf die Daten Ihrer Seite zugreift.

Ähnliche Probleme treten bei gemeinsam genutzten Hosting-Seiten auf, die jedem Kunden einen anderen Subdomain geben. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain nun dasselbe tun und anfangen, die Daten der ursprünglichen Seite zuzugreifen.

Statt `document.domain` zur Erleichterung der Kommunikation zwischen verschiedenen Ursprüngen zu verwenden, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugriff durch Nachrichtenübertragung ist viel sicherer als die umfassende Datenfreigabe, die durch `document.domain` verursacht wird.

#### Ausfälle

Der Setter wird in mehreren Fällen eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- Der {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen [Browsing-Kontext](/de/docs/Glossary/browsing_context).
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder der gleiche wie der aktuelle Hostname der Seite, noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlfall wird der Versuch, `document.domain` auf `"example.org"` zu setzen, wenn man sich auf `https://example.com/` befindet, einen Fehler auslösen.

Zusätzlich wird es, als Teil seiner Veralterung, nichts tun, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer cross-origin isolierten Seite verwendet wird, d.h. eine, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet.
- Wenn es auf einer ursprungs-isolierten Seite verwendet wird, d.h. eine, die den {{httpheader("Origin-Isolation")}} HTTP-Header verwendet.

Schließlich ändert das Festlegen von `document.domain` nicht den für Ursprungsprüfungen verwendeten Ursprung durch einige Web-APIs und verhindert den Subdomain-Zugriff über diesen Mechanismus. Betroffene APIs schließen (aber sind nicht auf diese beschränkt) ein: [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
