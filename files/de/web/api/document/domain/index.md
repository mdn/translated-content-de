---
title: "Dokument: domain Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`** Eigenschaft des {{domxref("Document")}}
Interfaces ruft den Domain-Teil des {{glossary("origin")}} des aktuellen Dokuments ab oder setzt ihn, wie er von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Die Verwendung dieser Funktion wurde durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert.

## Beispiele

### Die Domain abrufen

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String "`developer.mozilla.org`" setzen.

```js
const currentDomain = document.domain;
```

Der Getter dieser Eigenschaft gibt den Domain-Teil des Herkunftsbereichs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{glossary("origin")}} hat, z.B. für eine Seite mit einer [data URL](/de/docs/Web/URI/Schemes/data), dann wird der leere String zurückgegeben.
- Wenn der `document.domain` [Setter](#die_domain_setzen) verwendet wurde, dann wird der Wert zurückgegeben, der gesetzt wurde.

Obwohl der Getter nicht gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die {{domxref("Location.hostname")}} Eigenschaft zu verwenden. Dann können Sie `document.domain` völlig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String "`developer.mozilla.org`". Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind {{domxref("Location.host")}}, welches den Port einschließt, und {{domxref("Window.origin")}}, welches die volle Herkunft liefert.

### Die Domain setzen

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um die _Herkunft_ einer Seite zu _ändern_ und somit zu modifizieren, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn `https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihre Herkunft so geändert, dass sie die gleiche Domain haben und können jetzt direkt auf das DOM des jeweils anderen zugreifen—trotz der unterschiedlichen Herkunft, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert trotzdem die Herkunft. Zum Beispiel, wenn eine Seite setzt

```js
document.domain = document.domain;
```

dann wird sie als unterschiedlicher Herkunft von allen anderen normalerweise derselben Herkunft zuzählen, die nicht das gleiche getan haben.

#### Veraltung

Der `document.domain` Setter ist veraltet. Er untergräbt die von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bereitgestellten Sicherheitsmaßnahmen und verkompliziert das Herkunftsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Es öffnet vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Es entfernt auch die Portkomponente aus der Herkunft, sodass Ihre Seite jetzt von anderen Seiten mit derselben IP-Adresse oder derselben Host-Komponente, selbst auf einem anderen Port, abgerufen werden kann.

Dies ist besonders unsicher bei gemeinsamem Hosting. Zum Beispiel kann ein anderer Hosting-Kunde eine Seite unter derselben IP-Adresse, aber auf einem anderen Port hosten, dann wird das Setzen von `document.domain` den gleichen Ursprungsschutz, der Sie normalerweise vor dem Zugriff der Daten Ihrer Seite durch die Seite dieses anderen Kunden schützt, entfernen.

Ähnliche Probleme treten bei gemeinsamen Hosting-Sites auf, die jedem Kunden eine andere Subdomain geben. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain jetzt das gleiche tun und beginnen, auf die Daten der ursprünglichen Seite zuzugreifen.

Anstatt `document.domain` zu verwenden, um die cross-origin Kommunikation zu erleichtern, sollten Sie {{domxref("Window.postMessage")}} verwenden, um eine asynchrone Nachricht an die andere Herkunft zu senden. Dieser kontrollierte Zugriff über Nachrichtenübermittlung ist viel sicherer als die vollständige Exposition aller Daten, die durch `document.domain` verursacht wird.

#### Fehler

Der Setter wird eine "`SecurityError`" {{domxref("DOMException")}} in mehreren Fällen werfen:

- Der {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{glossary("browsing context")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder der gleiche wie der aktuelle Hostname der Seite, noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlerfall führt der Versuch, `document.domain` auf `"example.org"` zu setzen, während man sich auf `https://example.com/` befindet, zu einem Fehler.

Zusätzlich, als Teil der Veraltung, wird es nichts tun, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer cross-origin isolierten Seite verwendet wird, d. h. einer Seite, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet.
- Wenn es auf einer origin-isolierten Seite verwendet wird, d. h. einer Seite, die den {{httpheader("Origin-Isolation")}} HTTP-Header verwendet.

Schließlich ändert das Setzen von `document.domain` nicht die für Herkunftsprüfungen von einigen Web-APIs verwendete Herkunft, wodurch der Zugriff auf Subdomains über diesen Mechanismus verhindert wird. Betroffene APIs umfassen (aber sind nicht beschränkt auf): {{domxref("Window.localStorage")}}, [IndexDB API](/de/docs/Web/API/IndexedDB_API), {{domxref("BroadcastChannel")}}, {{domxref("SharedWorker")}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("Window.origin")}}
