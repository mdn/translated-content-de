---
title: PermissionsPolicyViolationReport
slug: Web/API/PermissionsPolicyViolationReport
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `PermissionsPolicyViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Bericht dar, der erstellt wird, wenn ein Dokument seine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verletzt.

Berichte dieses Typs können innerhalb einer Seite mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an einen Reporting-Server-Endpunkt gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Hauptteil des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `columnNumber`
      - : Die Zeichenposition in der Zeile des Skripts, an der die Verletzung auftrat, oder `null`, wenn nicht bekannt.
    - `disposition`
      - : Ein String, der angibt, ob die verletzte Richtlinie durchgesetzt oder nur gemeldet wurde.
        Dies kann den Wert `"enforce"` für Verletzungen von Richtlinien haben, die mit {{httpheader("Permissions-Policy")}} festgelegt wurden, und `report` für Verletzungen, die mit `Permissions-Policy-Report-Only` festgelegt wurden.
    - `featureId`
      - : Ein String, der die verletzte [Permissions Policy Direktive](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) darstellt (zum Beispiel `"geolocation"`).
    - `lineNumber`
      - : Die Zeilennummer im Skript, an der die Verletzung auftrat, oder `null`, wenn nicht bekannt.
    - `message`
      - : Ein String mit einer menschenlesbaren Beschreibung der Verletzung.
    - `sourceFile`
      - : Ein String, der die URL des Skripts darstellt, in dem die Verletzung auftrat, oder `null`, wenn nicht bekannt.
        Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.

- `type`
  - : Der String `"permissions-policy-violation"`, der anzeigt, dass es sich um einen Bericht über eine Verletzung der Permissions Policy handelt.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht erstellt hat.

> [!NOTE]
> Die serverseitige Serialisierung von Chrome verwendet `policyId` anstelle von `featureId` für den Funktionsnamen im Hauptteil eines Serverberichts.
> Für die Browser-Kompatibilität müssen Entwickler beide Felder in Reporting-Endpunkten verarbeiten.
> Der Bericht, der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben wird, folgt der Spezifikation.

## Beschreibung

Verletzungen der Permissions Policy werden gemeldet, wenn ein Dokument versucht, eine Browser-Funktion zu nutzen, die durch seine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
Die Richtlinie wird mit dem {{httpheader("Permissions-Policy")}} HTTP-Header oder einem `<meta http-equiv="permissions-policy">`-Element festgelegt.
Verletzungen der Richtlinie können auch gemeldet, aber nicht durchgesetzt werden, indem der {{httpheader("Permissions-Policy-Report-Only")}} HTTP-Header oder ein `<meta http-equiv="permissions-policy-report-only">`-Element verwendet wird.

Sie können innerhalb der Seite, die die Richtlinie festlegt, Berichte über Verstöße gegen die Permissions-Policy mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) überwachen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu lauschen, indem Sie eine Callback-Methode und eine (optionale) `options`-Eigenschaft angeben, die die Arten von Berichten spezifiziert, über die Sie berichten möchten.
Die Callback-Methode wird dann mit Berichten der gewünschten Typen aufgerufen, indem ein Berichtobjekt übergeben wird.
Für `Permissions-Policy`- oder `Permissions-Policy-Report-Only`-Verletzungen ist das Objekt eine `PermissionsPolicyViolationReport`-Instanz, bei der `PermissionsPolicyViolationReport.type === "permissions-policy-violation"`.

Die Struktur eines typischen In-Page-Berichts ist unten gezeigt.
Beachten Sie, dass wir die URL der Seite sehen können, deren Richtlinie verletzt wurde (`url`), und aus `body.featureId`, welche Funktion blockiert wurde.
Das Feld `body.disposition` zeigt, ob die Verletzung durchgesetzt oder nur gemeldet wurde.

```json
{
  "type": "permissions-policy-violation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 44,
    "columnNumber": 29,
    "featureId": "geolocation",
    "disposition": "enforce", // Policy was enforced!
    "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document."
  }
}
```

Verletzungsberichte können auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den im `report-to`-Parameter pro Direktive angegebenen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden, mit Rückgriff auf den [`default`-Reporting-Server-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) (falls definiert).
Der Reporting-Server-Endpunkt und seine Zuordnung zu einer bestimmten URL werden über den {{httpheader("Reporting-Endpoints")}} Antwort-Header festgelegt.

Die Struktur des Serverberichts ist fast genau die gleiche wie `PermissionsPolicyViolationReport`, außer dass sie zusätzlich `age`- und `user_agent`-Felder enthält.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "policyId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

## Beispiele

### Verwendung der `ReportingObserver`-Schnittstelle

Sie können ein `PermissionsPolicyViolationReport`-Objekt erhalten, indem Sie Ihre Seite so konfigurieren, dass sie eine Browser-Funktion blockiert, und dann versuchen, diese zu verwenden.

In diesem Beispiel blockieren wir die Geolocation-API für das aktuelle Dokument, indem wir entweder den {{httpheader("Permissions-Policy")}} HTTP-Header verwenden:

```http
Permissions-Policy: geolocation=()
```

Oder gleichwertig über ein HTML-`<meta>`-Element:

```html
<meta http-equiv="permissions-policy" content="geolocation=()" />
```

Dann versuchen wir, die Geolocation-API zu benutzen:

```js
// This should generate a Permissions Policy violation
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Schließlich erstellen wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Verstöße gegen die Permissions Policy zu lauschen (dies muss vor dem Laden des Codes geschehen, der die Verletzung auslöst).

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["permissions-policy-violation"],
    buffered: true,
  },
);

observer.observe();
```

Oben protokollieren wir jedes Verletzungsbericht-Objekt und eine JSON-String-Version des Objekts, die dem unten gezeigten Objekt ähnlich aussieht.
Beachten Sie, dass der `type` `"permissions-policy-violation"` ist und `body.featureId` die blockierte Funktion identifiziert.

```json
{
  "type": "permissions-policy-violation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 44,
    "columnNumber": 29,
    "featureId": "geolocation",
    "disposition": "enforce",
    "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document."
  }
}
```

### Senden eines Berichts über eine Verletzung der Permissions Policy an einen Reporting-Endpunkt

Dieses Beispiel zeigt, wie Sie die Berichterstattung von `Permissions-Policy`-Verletzungen an einen Server-Endpunkt konfigurieren.

Die Antwort-Header unten blockieren die Geolocation und definieren den Reporting-Endpunktnamen für die Funktion als "geo_endpoint".
Der {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header wird verwendet, um die URL dieses Endpunktnamens zu definieren.

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy: geolocation=();report-to=geo_endpoint
```

> [!NOTE]
> Um alle Verletzungsberichte an denselben Endpunkt zu senden, könnten wir stattdessen den [`"default"`-Reporting-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definieren:
>
> ```http
> Reporting-Endpoints: default="https://example.com/reports"
> Permissions-Policy: geolocation=()
> ```

Wie zuvor wird eine Verletzung durch den Versuch ausgelöst, eine blockierte Funktion zu verwenden:

```js
// This should generate a Permissions Policy violation
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Der Verletzungsbericht wird dann als JSON-Array an den Standard-Endpunkt gesendet.
Beachten Sie, dass der `type` `"permissions-policy-violation"` ist und die `body`-Eigenschaft eine Serialisierung des `PermissionsPolicyViolationReport`-Objekts ist.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "policyId": "geolocation", // Note: Chrome server-report version of featureId
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{httpheader("Permissions-Policy")}}
- {{httpheader("Permissions-Policy-Report-Only")}}
- {{httpheader("Reporting-Endpoints")}}
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
