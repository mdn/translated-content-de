---
title: COEPViolationReport
slug: Web/API/COEPViolationReport
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Das `COEPViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Bericht dar, der erstellt wird, wenn ein Dokument seine {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) verletzt.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, oder eine serialisierte Version kann an einen [Berichtsserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Inhalt des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Ein String, der die Ursache der Verletzung beschreibt, die den Bericht ausgelöst hat.
        Dies kann einen der folgenden Werte haben:
        - `"corp"`
          - : Ein Dokument mit {{httpheader("Cross-Origin-Embedder-Policy")}} auf [`require-corp`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp) gesetzt, hat versucht, eine Cross-Origin-Unterressource zu laden, die nicht explizit erlaubt, eingebettet zu werden (indem es eine passende {{httpheader("Cross-Origin-Resource-Policy")}} setzt).
        - `"navigation"`
          - : Ein {{htmlelement("iframe")}} in einem Dokument, das entweder die COEP-Direktiven `require-corp` oder `credentialless` hat, lädt ein Dokument, das:
            - Weder die COEP-Direktive `require-corp` noch `credentialless` hat
            - Cross-Origin mit dem einbettenden Dokument ist und keinen CORP-Header hat, der das Einbetten in das Eltern-Dokument erlaubt
        - `"worker initialization"`
          - : Ein dedizierter Worker, der von einem Dokument mit den COEP-Direktiven `require-corp` oder `credentialless` erstellt wird, versucht ein Workerskript zu laden, das keine dieser Direktiven gesetzt hat.

    - `blockedURL`
      - : Ein String, der die URL der Ressource enthält, die durch eine durchgesetzte COEP-Verletzung vom Laden blockiert wurde.
    - `destination` {{non-standard_inline}}
      - : Ein String, der das _Ziel_ der blockierten Ressource angibt.
        Dies kann einen der Werte von [`Request.destination`](/de/docs/Web/API/Request/destination#value) haben.
    - `disposition`
      - : Ein String, der angibt, ob die Verletzung durchgesetzt oder nur berichtet wurde.
        Dies kann einen der folgenden Werte haben:
        - `"enforce"`
          - : Die Verletzung hat das Laden der eingebetteten Ressource blockiert.
            Dies wird für Verletzungen von Richtlinien gesetzt, die mit {{httpheader("Cross-Origin-Embedder-Policy")}} festgelegt wurden.
        - `"reporting"`
          - : Die Verletzung wurde gemeldet, ohne die Ressource vom Laden zu blockieren.
            Dies wird für Verletzungen von Richtlinien gesetzt, die mit {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} festgelegt wurden.

- `type`
  - : Der String `"coep"`, der angibt, dass dies ein COEP-Verletzungsbericht ist.

- `url`
  - : Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

## Beschreibung

Die Richtlinien eines Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen, die im `no-cors`-Modus angefordert werden, werden mit dem {{httpheader("Cross-Origin-Embedder-Policy")}} HTTP-Header konfiguriert und durchgesetzt, und können auch mit dem {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}-Header gemeldet, aber nicht durchgesetzt werden.

COEP-Richtlinienverletzungen können jederzeit gemeldet werden, wenn eine durch diese Header festgelegte Richtlinie das Laden einer Ressource blockiert (oder blockieren würde).

Sie können COEP-Verletzungsberichte innerhalb der Seite überwachen, die die Richtlinie setzt, indem Sie die [Reporting API](/de/docs/Web/API/Reporting_API) verwenden.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu lauschen. Dabei wird eine Callback-Methode und eine (optionale) `options`-Eigenschaft übergeben, die die Typen von Berichten spezifiziert, die Sie melden möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Typen aufgerufen, wobei ein Berichtsobjekt übergeben wird.
Für COEP-Verletzungen wird das Objekt ein `COEPViolationReport` sein (das die [`type`](#type) Eigenschaft auf `"coep"` gesetzt hat).

Die Struktur eines typischen Berichts wird unten gezeigt.
Beachten Sie, dass wir die URL der Seite sehen können, deren Richtlinie verletzt wurde (`url`), und die Ressource, die vom Laden blockiert wurde (`body.blockedURL`).
Wir können auch sehen, dass der Bericht durch eine `corp`-Verletzung ausgelöst wurde und aus der `body.disposition`, dass sie durchgesetzt wurde (und nicht nur gemeldet).

```json
{
  "type": "coep",
  "url": "https://url-of-page-attempting-to-load-resource-in-violation",
  "body": {
    "type": "corp",
    "blockedURL": "https://url-of-blocked-resource",
    "destination": "image",
    "disposition": "enforce"
  }
}
```

Verletzungsberichte können auch als JSON-Objekt in einem `POST` an einen konfigurierten [Berichtsserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Der Name des Berichtsserver-Endpunkts wird in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#report-to_endpoint_name)-Richtliniendirektive des {{httpheader("Cross-Origin-Embedder-Policy")}} oder {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}-Headers angegeben.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header definiert.

Die Struktur des Serverberichts ist fast genau gleich wie `COEPViolationReport`, enthält jedoch zusätzlich `age` und `user_agent` Felder.

```json
[
  {
    "age": 967132,
    "body": {
      "blockedURL": "https://url-of-resource-that-was-blocked",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://url-of-document-that-generated-report",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

## Beispiele

### Verwendung des `ReportingObserver`-Interfaces

Dieses Beispiel zeigt, wie Sie COEP-Verletzungsberichte mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Betrachten Sie zunächst den Fall, in dem wir eine HTML-Datei haben, die unter dem Ursprung `https://example.com` gehostet wird und ein {{htmlelement("img")}}-Element enthält, das als Quelle die (cross-origin) Ressource `some-image.png` setzt.
Da das Element das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut nicht setzt, wird es im `no-cors`-Modus angefordert.
Standardmäßig wird diese Anfrage erfolgreich sein, wenn `some-image.png` nicht mit dem {{httpheader("Cross-Origin-Embedder-Policy")}}-Header bereitgestellt wird.

```html
<img src="https://another-example.com/some-image.png" />
```

Um sicherzustellen, dass das Dokument nur Cross-Origin-Ressourcen lädt, die angeben, dass sie im Ursprungsdokument sicher geladen werden können, können wir den {{httpheader("Cross-Origin-Embedder-Policy")}}-Header mit der [`require-corp`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp)-Direktive wie folgt setzen:

```http
Cross-Origin-Embedder-Policy: require-corp
```

Dieser Header erzwingt, dass alle Ressourcen mit dem {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header und einem Wert von `cross-origin` bereitgestellt werden müssen, um in den Dokumentursprung (`https://example.com`) geladen werden zu können.
Sofern der Server, der `some-image.png` hostet, den Header nicht setzt, müssen wir nichts weiter tun, um eine COEP-Verletzung auszulösen.

Um Verletzungen innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um Berichte mit dem Typ `"coep"` abzuhören, und übergeben einen Callback, der die Berichte empfängt und protokolliert.
Dieser Code muss geladen werden, bevor das Skript, das die Verletzung verursacht, geladen wird:

```js
const options = {
  types: ["coep"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((violation) => {
    console.log(violation);
    console.log(JSON.stringify(violation));
  });
}, options);

observer.observe();
```

Oben protokollieren wir jedes Verletzungsberichtsobjekt und eine JSON-String-Version des Objekts, die dem unten gezeigten Objekt ähneln könnte.
Beachten Sie, dass der `type` `"coep"` ist.

```json
{
  "type": "coep",
  "url": "https://example.com",
  "body": {
    "type": "corp",
    "blockedURL": "https://another-example.com/some-image.png",
    "destination": "image",
    "disposition": "enforce"
  }
}
```

Der gleiche Bericht könnte mit {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} erzeugt werden, außer dass die [disposition](#disposition) als `"reporting"` gemeldet würde.

### Senden eines Berichts an einen Berichtsendpunkt

Die Konfiguration einer Webseite zum Senden eines COEP-Berichts an einen [Berichtsserver-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) ist fast identisch mit dem vorherigen Beispiel.
Der einzige Unterschied besteht darin, dass wir einen Berichts-Endpunkt angeben müssen, an den wir die Berichte senden möchten, indem wir den {{httpheader("Reporting-Endpoints")}}-Antwortheader verwenden und diesen dann im `report-to`-Parameter beim Setzen der Richtlinie referenzieren.

Sie können dies unten sehen, wo wir den Endpunkt namens `coep-endpoint` definieren und ihn dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

Der Verletzungsbericht wird dann als JSON-Objekt in einem `POST` an den durch `coep-endpoint` referenzierten Endpunkt gesendet.

Das Bericht-Objekt hat die gleiche Struktur wie bei der Rückgabe aus dem `ReportingObserver`-Callback, mit Ausnahme der Ergänzungen von `age` und `user_agent` Eigenschaften.

```json
[
  {
    "age": 717139,
    "body": {
      "blockedURL": "https://another-example.com/some-image.png",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://example.com",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36"
  }
]
```

Der gleiche Bericht würde erzeugt werden, wenn wir {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} auf die gleiche Weise setzen, außer dass die [disposition](#disposition) auf `"reporting"` gesetzt würde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- {{httpheader("Cross-Origin-Embedder-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
