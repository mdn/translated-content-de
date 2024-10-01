---
title: "Document: domain-Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef}} {{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces ruft den Domain-Anteil des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments ab oder setzt ihn, wie er durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) verwendet wird.

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

Der Getter für diese Eigenschaft gibt den Domain-Anteil des Ursprungs des aktuellen Dokuments zurück. In den meisten Fällen wird dies der Hostname-Teil der Dokument-URL sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z. B. für eine Seite mit einer [Daten-URL](/de/docs/Web/URI/Schemes/data), dann wird der leere String zurückgegeben.
- Wenn der `document.domain`-[Setter](#setzen_der_domain) verwendet wurde, dann wird der gesetzte Wert zurückgegeben.

Obwohl der Getter nicht gefährlich ist wie der Setter, ist es wahrscheinlich einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden. So können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist `currentHostname` ebenfalls der String `"developer.mozilla.org"`. Andere Alternativen, die leicht abweichende Informationen liefern, sind [`Location.host`](/de/docs/Web/API/Location/host), welches den Port einschließt, und [`Window.origin`](/de/docs/Web/API/Window/origin), das den vollständigen Ursprung liefert.

### Setzen der Domain

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und dadurch zu modifizieren, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn `https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihren Ursprung so verändert, dass sie dieselbe Domain haben, und sie können nun direkt aufeinander zugreifen—trotz des normalerweise bestehenden Cross-Origin-Schutzes, der solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es ändert dennoch den Ursprung. Zum Beispiel, wenn eine Seite

```js
document.domain = document.domain;
```

setzt, dann wird es als Cross-Origin zu allen anderen normalerweise gleichen Ursprungseiten betrachtet, die dies nicht getan haben.

#### Veralterung

Der `document.domain` Setter ist veraltet. Er untergräbt die Schutzmaßnahmen der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) und verkompliziert das Ursprungsmodell in Browsern, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Er ermöglicht vollen Zugriff auf das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Er entfernt auch die Port-Komponente aus dem Ursprung, sodass Ihre Seite von anderen Seiten mit derselben IP-Adresse oder demselben Host-Bestandteil, auch bei einem anderen Port, zugänglich ist.

Dies ist besonders unsicher bei gemeinsamem Hosting. Zum Beispiel kann ein anderer Kunde des Hosting-Anbieters eine Seite auf derselben IP-Adresse, aber an einem anderen Port hosten. Das Setzen von `document.domain` würde dann den Same-Origin-Schutz entfernen, der normalerweise verhindert, dass die Seite des anderen Kunden auf die Daten Ihrer Seite zugreift.

Ähnliche Probleme treten bei gemeinsamen Hosting-Seiten auf, die jedem Kunden eine andere Subdomain zuweisen. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einer anderen Subdomain dasselbe tun und beginnen, auf die Daten der ursprünglichen Seite zuzugreifen.

Statt `document.domain` zu verwenden, um eine Cross-Origin-Kommunikation zu erleichtern, sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den anderen Ursprung zu senden. Dieser kontrollierte Zugang über Nachrichtenübermittlung ist viel sicherer als die pauschale Datenfreigabe, die `document.domain` verursacht.

#### Fehler

Der Setter wird in mehreren Fällen einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- Die {{httpheader('Permissions-Policy/document-domain','document-domain')}}
  {{HTTPHeader("Permissions-Policy")}} ist deaktiviert.
- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der gegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite noch eine übergeordnete Domain davon.

Ein Beispiel für diesen letzten Fehlerfall ist der Versuch, `document.domain` auf `"example.org"` zu setzen, wenn man sich auf `https://example.com/` befindet.

Zusätzlich wird es, als Teil seiner Veralterung, nichts tun, wenn es mit bestimmten modernen Isolationsfunktionen kombiniert wird:

- Wenn es auf einer Cross-Origin-isolierten Seite verwendet wird, d.h. einer, die die geeigneten Werte für die {{httpheader("Cross-Origin-Opener-Policy")}} und
  {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet
- Wenn es auf einer Ursprung-isolierten Seite verwendet wird, d.h. einer, die den
  {{httpheader("Origin-Isolation")}} HTTP-Header verwendet

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für Ursprungsüberprüfungen durch einige Web-APIs verwendet wird, wodurch Sub-Domain-Zugriffe über diesen Mechanismus verhindert werden. Betroffene APIs umfassen (aber sind nicht beschränkt auf):
[`Window.localStorage`](/de/docs/Web/API/Window/localStorage), [IndexDB API](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [`Location.hostname`](/de/docs/Web/API/Location/hostname)
- [`Location.host`](/de/docs/Web/API/Location/host)
- [`Window.origin`](/de/docs/Web/API/Window/origin)
