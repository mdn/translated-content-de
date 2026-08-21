---
title: "Dokument: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ruft den Domain-Teil des {{Glossary("origin", "ursprungs")}} des aktuellen Dokuments ab oder setzt ihn, wie es von der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) verwendet wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es ist dem Dokument verboten, seine Domain zu setzen, zum Beispiel, wenn es sandboxed ist oder einen undurchsichtigen Ursprung hat. Details finden Sie im [Fehlerabschnitt](#fehler).

## Beispiele

### Die Domain abrufen

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird, würde dieses Beispiel `currentDomain` auf den String `"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z. B. für eine Seite mit einer [Data-URL](/de/docs/Web/URI/Reference/Schemes/data), dann wird ein leerer String zurückgegeben.
- Wenn der `document.domain` [Setter](#die_domain_festlegen) verwendet wurde, gibt er den gesetzten Wert zurück.

Obwohl der Getter nicht gefährlich in der Weise ist, wie es der Setter ist, ist es wahrscheinlich einfacher und nützlicher, stattdessen die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. So können Sie die Verwendung von `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht unterschiedliche Informationen bieten, sind [`Location.host`](/de/docs/Web/API/Location/host), das den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den gesamten Ursprung bereitstellt.

### Die Domain festlegen

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und somit zu modifizieren, wie bestimmte Sicherheitsüberprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn `https://a.example.com` und `https://b.example.com` beide Folgendes verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihren Ursprung geändert, um dieselbe Domain zu haben, und sie können nun direkt auf den DOM des jeweils anderen zugreifen – trotz Cross-Origin, was normalerweise einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert dennoch den Ursprung. Wenn beispielsweise eine Seite Folgendes setzt

```js
document.domain = document.domain;
```

dann wird es als Cross-Origin von allen anderen normalerweise gleich-origin Seiten gezählt, die nicht dasselbe getan haben.

#### Veralterung

Der `document.domain`-Setter ist veraltet. Er untergräbt die Sicherheitsvorkehrungen, die durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) bereitgestellt werden, und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Es öffnet den vollständigen Zugriff auf den DOM einer Seite für _alle_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Außerdem wird die Portkomponente aus dem Ursprung entfernt, sodass jetzt Ihre Seite von anderen Seiten mit derselben IP-Adresse oder demselben Host-Komponenten, selbst auf einem anderen Port, aufgerufen werden kann.

Dies ist besonders unsicher beim Shared Hosting. Beispielsweise kann ein anderer Kunde des Shared Hosting in der Lage sein, eine Website mit derselben IP-Adresse, aber auf einem anderen Port zu hosten, und das Setzen von `document.domain` wird den Same-Origin-Schutz entfernen, der normalerweise verhindert, dass die Seite dieses anderen Kunden auf die Daten Ihrer Website zugreift.

Ähnliche Probleme treten bei Shared-Hosting-Websites auf, die jedem Kunden eine andere Subdomain geben. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain nun dasselbe tun und beginnt, auf die Daten der ursprünglichen Seite zuzugreifen.

Statt `document.domain` zu verwenden, um die Cross-Origin-Kommunikation zu erleichtern, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugriff über Nachrichtenübermittlung ist viel sicherer als die vollständige Exposition aller Daten, die `document.domain` verursacht.

#### Fehler

Der Setter wird in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- Das Dokument befindet sich innerhalb eines sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Als Beispiel für diesen letzten Fehlerfall wird der Versuch, `document.domain` auf `"example.org"` zu setzen, wenn man sich auf `https://example.com/` befindet, ein Beispiel werfen.

Zusätzlich wird es aufgrund seiner Veralterung nichts tun, wenn es mit bestimmten modernen Isolation-Features kombiniert wird:

- Wenn es auf einer Cross-Origin-isolierten Seite verwendet wird, d.h. einer Seite, die die entsprechenden Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet.
- Wenn es auf einer Ursprungs-isolierten Seite verwendet wird, d.h. einer Seite, die den {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet.

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für Ursprungsprüfungen durch einige Web APIs verwendet wird, wodurch der Zugriff auf Subdomains über diesen Mechanismus verhindert wird. Betroffene APIs umfassen (aber sind nicht beschränkt auf): [`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
