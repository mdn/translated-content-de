---
title: PermissionsPolicyViolationReport
slug: Web/API/PermissionsPolicyViolationReport
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `PermissionsPolicyViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Bericht, der erstellt wird, wenn ein Dokument seine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verletzt.

Berichte dieser Art können von einer Seite aus mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, und eine serialisierte Version kann an den [Standard-Reporting-Server-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet werden.

## Instanzeigenschaften

- `body`
  - : Der Hauptteil des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `columnNumber`
      - : Die Zeichenposition in der Zeile des Skripts, an der die Verletzung aufgetreten ist, oder `null`, wenn nicht bekannt.
    - `disposition`
      - : Ein String, der angibt, ob die verletzte Richtlinie durchgesetzt oder nur gemeldet wurde.
        Dies kann den Wert `"enforce"` für Verstöße gegen Richtlinien haben, die mit {{httpheader("Permissions-Policy")}} gesetzt wurden, und `report` für Verstöße, die mit `Permissions-Policy-Report-Only` gesetzt wurden.
    - `featureId`
      - : Ein String, der die [Permissions Policy Directive](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) darstellt, die verletzt wurde (zum Beispiel `"geolocation"`).
    - `lineNumber`
      - : Die Zeilennummer im Skript, an der die Verletzung aufgetreten ist, oder `null`, wenn nicht bekannt.
    - `message`
      - : Ein String, der eine lesbare Beschreibung der Verletzung enthält.
    - `sourceFile`
      - : Ein String, der die URL des Skripts darstellt, in dem die Verletzung aufgetreten ist, oder `null`, wenn nicht bekannt.
        Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.

- `type`
  - : Der String `"permissions-policy-violation"`, was anzeigt, dass dies ein Bericht über eine Verletzung der Permissions Policy ist.
- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

> [!NOTE]
> Die serverseitige Serialisierung von Chrome verwendet `policyId` anstelle von `featureId` für den Eigenschaftsnamen im Hauptteil eines Serverberichts.
> Für die plattformübergreifende Browser-Kompatibilität müssen Entwickler beide Felder in Reporting-Endpunkten verarbeiten.
> Der Bericht, der von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben wird, folgt der Spezifikation.

## Beschreibung

Berichte über Verletzungen von Permissions Policies werden erzeugt, wenn ein Dokument versucht, eine Browserfunktion zu verwenden, die durch seine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
Die Richtlinie wird durch den {{httpheader("Permissions-Policy")}} HTTP-Header oder ein `<meta http-equiv="permissions-policy">`-Element gesetzt.

Sie können innerhalb der Seite, die die Richtlinie setzt, mit der [Reporting API](/de/docs/Web/API/Reporting_API) auf Berichte über Violations-Reports zu Permissions Policy überwachen.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte zu lauschen, indem Sie eine Callback-Methode und eine (optionale) `options`-Eigenschaft angeben, die die Berichtstypen spezifiziert, über die Sie berichten möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen und übergibt ein Berichtsobjekt.
Für Verstöße gegen `Permissions-Policy` wird das Objekt eine `PermissionsPolicyViolationReport`-Instanz mit `PermissionsPolicyViolationReport.type == "permissions-policy-violation"` sein.

Die Struktur eines typischen In-Page-Berichts ist unten dargestellt.
Beachten Sie, dass wir die URL der Seite sehen können, deren Richtlinie verletzt wurde (`url`), und aus `body.featureId` können wir sehen, welche Funktion blockiert wurde.
Das Feld `body.disposition` zeigt, dass die Verletzung durchgesetzt wurde.

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

Verletzungsberichte können auch als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden, der `"default"` genannt wird, falls einer definiert ist.
Der Reporting-Server-Endpunkt und seine Zuordnung zu einer bestimmten URL werden durch den {{httpheader("Reporting-Endpoints")}}-Header festgelegt.

Die Struktur des Serverberichts ist fast genau dieselbe wie die von `PermissionsPolicyViolationReport`, außer dass sie zusätzlich `age` und `user_agent` Felder enthält.

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

Sie können ein `PermissionsPolicyViolationReport`-Objekt erhalten, indem Sie Ihre Seite so konfigurieren, dass eine Browserfunktion blockiert wird, und dann versuchen, sie zu verwenden.

In diesem Beispiel werden wir die Geolocation API für das aktuelle Dokument entweder durch den {{httpheader("Permissions-Policy")}} HTTP-Header blockieren:

```http
Permissions-Policy: geolocation=()
```

Oder gleichwertig über ein HTML-`<meta>`-Element:

```html
<meta http-equiv="permissions-policy" content="geolocation=()" />
```

Dann werden wir versuchen, die Geolocation API zu verwenden:

```js
// This should generate a Permissions Policy violation
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Schließlich werden wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt erstellen, um auf Verstöße gegen Permissions Policy zu lauschen (dies muss geladen werden, bevor der Code geladen wird, der die Verletzung auslöst).

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

Oben protokollieren wir jedes Verstoßbericht-Objekt und eine JSON-String-Version des Objekts, die dem unten ähnelt.
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

Hier definieren wir den Reporting-Endpunkt namens `"default"` mit dem {{httpheader("Reporting-Endpoints")}} Antwortheader und setzen den `Permissions-Policy`-Header, um die Nutzung der `geolocation`-Funktion zu blockieren.

```http
Reporting-Endpoints: default="https://example.com/reports"
Permissions-Policy: geolocation=()
```

Wie zuvor wird eine Verletzung durch den Versuch ausgelöst, eine blockierte Funktion zu nutzen:

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
- {{httpheader("Reporting-Endpoints")}}
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Reporting API](/de/docs/Web/API/Reporting_API)
