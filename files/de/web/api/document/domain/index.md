---
title: "Dokument: domain Eigenschaft"
short-title: domain
slug: Web/API/Document/domain
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`domain`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)
Interfaces ruft den Domain-Teil des {{Glossary("origin", "Ursprungs")}} des aktuellen Dokuments
ab oder setzt diesen, wie er von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) genutzt wird.

## Wert

Ein String.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument darf seine Domain nicht setzen, beispielsweise wenn es im Sandkasten ausgeführt wird oder einen undurchsichtigen Ursprung hat. Siehe [Abschnitt über Fehler](#fehler) für Details.

## Beispiele

### Die Domain abrufen

Für Code, der unter der URL `https://developer.mozilla.org/de/docs/Web` ausgeführt wird,
würde dieses Beispiel `currentDomain` auf den String
`"developer.mozilla.org"` setzen.

```js
const currentDomain = document.domain;
```

Der Getter für diese Eigenschaft gibt den Domain-Teil des Ursprungs des aktuellen Dokuments
zurück. In den meisten Fällen wird dies der Hostname-Teil der URL des Dokuments sein. Es gibt jedoch einige Ausnahmen:

- Wenn die Seite einen undurchsichtigen {{Glossary("origin", "Ursprung")}} hat, z.B. für eine Seite mit einer [Daten-URL](/de/docs/Web/URI/Reference/Schemes/data), dann wird
  sie den leeren String zurückgeben.
- Wenn der `document.domain`-[Setter](#die_domain_setzen) verwendet wurde, dann
  wird der gesetzte Wert zurückgegeben.

Obwohl der Getter nicht in der gleichen Weise gefährlich ist wie der Setter, ist es wahrscheinlich
einfacher und nützlicher, die [`Location.hostname`](/de/docs/Web/API/Location/hostname)-Eigenschaft zu verwenden.
Dann können Sie `document.domain` vollständig vermeiden:

```js
const currentHostname = location.hostname;
```

Für die URL `https://developer.mozilla.org/de/docs/Web` ist
`currentHostname` ebenfalls der String `"developer.mozilla.org"`.
Andere Alternativen, die leicht unterschiedliche Informationen liefern, sind
[`Location.host`](/de/docs/Web/API/Location/host), das den Port enthält, und
[`Window.origin`](/de/docs/Web/API/Window/origin), das den vollen Ursprung liefert.

### Die Domain setzen

```js
document.domain = domainString;
```

Der Setter für diese Eigenschaft kann verwendet werden, um den {{Glossary("origin", "Ursprung")}} einer Seite zu _ändern_ und damit zu verändern, wie bestimmte Sicherheitsprüfungen durchgeführt werden. Er kann nur auf die gleiche oder eine übergeordnete Domain gesetzt werden. Zum Beispiel, wenn
`https://a.example.com` und `https://b.example.com` beide verwenden

```js
document.domain = "example.com";
```

dann haben sie beide ihren Ursprung modifiziert, um die gleiche Domain zu haben, und sie können nun
direkt auf das DOM des jeweils anderen zugreifen—trotz Cross-Origin, das normalerweise
einen solchen Zugriff verhindern würde.

Beachten Sie, dass das Setzen von `document.domain` auf seinen aktuellen Wert keine No-Op ist. Es
ändert dennoch den Ursprung. Zum Beispiel, wenn eine Seite setzt

```js
document.domain = document.domain;
```

dann wird sie als Cross-Origin von allen anderen normalerweise gleichen Ursprungsseiten gezählt, die
nicht dasselbe getan haben.

#### Veraltend

Der `document.domain`-Setter ist veraltet. Er untergräbt die Sicherheitsvorkehrungen, die von der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) bereitgestellt werden, und kompliziert das Ursprungsmodell in Browsern, was zu
Interoperabilitätsproblemen und Sicherheitslücken führt.

Der Versuch, `document.domain` zu setzen, ist gefährlich. Er öffnet den vollständigen Zugriff auf
das DOM einer Seite von _allen_ Subdomains, was wahrscheinlich nicht beabsichtigt ist. Er
entfernt auch die Port-Komponente vom Ursprung, sodass Ihre Seite jetzt von
anderen Seiten mit derselben IP-Adresse oder demselben Host-Komponenten, sogar auf einem anderen Port, zugänglich gemacht werden kann.

Dies ist besonders unsicher bei gemeinsam genutztem Hosting. Beispielsweise ist ein anderer Kunde
des Shared Hosting in der Lage, eine Seite unter derselben IP-Adresse, jedoch auf einem anderen Port zu hosten. Das Setzen von `document.domain` entfernt dann den Same-Origin-Schutz, der
normalerweise verhindert, dass diese andere Kundenseite auf die Daten Ihrer Seite zugreift.

Ähnliche Probleme treten bei Shared-Hosting-Seiten auf, die jedem Kunden eine andere
Subdomain zuweisen. Wenn eine Seite `document.domain` setzt, kann jeder andere Kunde auf einem
anderen Subdomain dasselbe tun und beginnt, auf die Daten der originalen Seite zuzugreifen.

Anstatt `document.domain` zur Erleichterung der Cross-Origin-Kommunikation zu verwenden,
sollten Sie [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) verwenden, um eine asynchrone Nachricht an den
anderen Ursprung zu senden. Dieser kontrollierte Zugriff über Nachrichtenübermittlung ist viel sicherer als die
pauschale Offenlegung aller Daten, die durch `document.domain` verursacht wird.

#### Fehler

Der Setter wird einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) in
mehreren Fällen werfen:

- Das Dokument befindet sich in einem sandboxed {{htmlelement("iframe")}}.
- Das Dokument hat keinen {{Glossary("browsing_context", "Browsing-Kontext")}}.
- Die [effektive Domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) des Dokuments ist `null`.
- Der angegebene Wert ist weder derselbe wie der aktuelle Hostname der Seite, noch eine übergeordnete
  Domain davon.

Als Beispiel für diesen letzten Fehlerfall, der Versuch, `document.domain` auf
`"example.org"` zu setzen, während man auf `https://example.com/` ist, wird einen Fehler werfen.

Zusätzlich wird er als Teil seiner Veralterung nichts tun, wenn er mit bestimmten
modernen Isolationstechniken kombiniert wird:

- Wenn er auf einer kreuzursprungs-isolierten Seite verwendet wird, d.h. auf einer Seite, die die entsprechenden Werte
  für die {{httpheader("Cross-Origin-Opener-Policy")}} und
  {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header verwendet
- Wenn er auf einer ursprungs-isolierten Seite verwendet wird, d.h. auf einer Seite, die den
  {{httpheader("Origin-Agent-Cluster")}} {{experimental_inline}} HTTP-Header verwendet

Schließlich ändert das Setzen von `document.domain` nicht den Ursprung, der für
Ursprungsüberprüfungen durch einige Web-APIs verwendet wird, wodurch ein Zugriff auf Sub-Domains über diesen Mechanismus verhindert wird.
Betroffene APIs umfassen (aber sind nicht beschränkt auf):
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
