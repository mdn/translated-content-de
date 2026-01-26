---
title: "Document: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`domain`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle ermöglicht das Abrufen/Setzen des Domain-Teils des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments, wie er in der [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es ist dem Dokument verboten, seine Domain zu setzen, zum Beispiel wenn es isoliert ("sandboxed") ist oder einen undurchsichtigen Ursprung hat. Siehe [Fehlersektion](#fehler) für Details.

## Beispiele

### Abrufen der Domain

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen ist das der Hostname-Teil der URL des Dokuments. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z.B. bei einer Seite mit einer [Data-URL](/de/docs/Web/URI/Reference/Schemes/data), wird ein leerer String zurückgegeben.
- Wenn der `document.domain` [Setter](#setzen_der_domain) verwendet wurde, wird der Wert zurückgegeben, der gesetzt wurde.

Obwohl der Getter nicht in der gleichen Weise gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. Dann können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den gesamten Ursprung liefert.

### Setzen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und damit zu beeinflussen, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Wenn z.B.

```js
document.domain = "example.com";
```

verwendet wird, haben `https://a.example.com` und `https://b.example.com` beide ihren Ursprung so geändert, dass sie die gleiche Domain haben und nun direkt auf den DOM des jeweils anderen zugreifen können - obwohl sie fremde Ursprünge sind, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Der Ursprung wird trotzdem verändert. Wenn z.B. eine Seite

```js
document.domain = document.domain;
```

setzt, wird sie als fremder Ursprung von anderen normalerweise gleichberechtigten Ursprungsseiten betrachtet, die dies nicht getan haben.

#### Veraltung

Der `document.domain`-Setter ist veraltet. Er untergräbt die Sicherheitsvorkehrungen, die durch die [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) bereitgestellt werden, und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Er öffnet den vollständigen Zugang zum DOM einer Seite für _alle_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Er entfernt auch die Portkomponente aus dem Ursprung, sodass Ihre Seite von anderen Seiten mit derselben IP-Adresse oder derselben Hostkomponente zugänglich gemacht werden kann, selbst auf einem anderen Port.

Dies ist besonders unsicher beim Shared Hosting. Ein weiterer Kunde beim Shared Hosting könnte eine Seite mit derselben IP-Adresse, aber einem anderen Port hosten. Wenn dann `document.domain` gesetzt wird, entfällt der Same-Origin-Schutz, der normalerweise verhindert, dass diese andere Kundenseite auf die Daten Ihrer Seite zugreift.

Ähnliche Probleme treten bei Shared Hosting-Websites auf, die jedem Kunden eine andere Subdomain zuweisen. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und anfangen, auf die Daten der ursprünglichen Seite zuzugreifen.

Anstelle von `document.domain` zur Erleichterung von Cross-Origin-Kommunikation zu verwenden, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugriff über Nachrichtenübermittlung ist weitaus sicherer als die pauschale Offenlegung aller Daten, die durch `document.domain` verursacht wird.

#### Fehler

Der Setter wirft eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) in mehreren Fällen:

- Das Dokument befindet sich in einem isolierten {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der gegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Ein Beispiel für diesen letzten Fehlerfall ist, wenn versucht wird, `document.domain` auf `"example.org"` zu setzen, während man sich auf `https://example.com/` befindet, wird ein Fehler geworfen.

Zusätzlich wird im Rahmen der Veraltung nichts unternommen, wenn es mit bestimmten modernen Isolationsmerkmalen kombiniert wird:

- Wenn auf einer Cross-Origin-isolierten Seite verwendet, also einer, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet
- Wenn auf einer Ursprungs-isolierten Seite verwendet, also einer, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für Ursprungsprüfungen durch einige Web-APIs verwendet wird, wodurch der Subdomain-Zugriff über diesen Mechanismus verhindert wird. Betroffene APIs umfassen (aber sind nicht beschränkt auf): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Richtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
