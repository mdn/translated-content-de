---
title: COEPViolationReport
slug: Web/API/COEPViolationReport
l10n:
  sourceCommit: 2d0aa21573c6ceb33aeadf94ce6cd84588b74123
---

{{APIRef("Reporting API")}}

Das `COEPViolationReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen Bericht, der erstellt wird, wenn ein Dokument seine {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) verletzt.

Berichte dieser Art können innerhalb einer Seite mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet werden, oder eine serialisierte Version kann an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.

## Instanz-Eigenschaften

- `body`
  - : Der Hauptteil des Berichts, der mehr Informationen über den Verstoß enthält.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Ein String, der die Ursache des Verstoßes darstellt, der den Bericht ausgelöst hat.
        Dieser kann einen der folgenden Werte haben:
        - `"corp"`
          - : Ein Dokument mit einer auf [`require-corp`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp) gesetzten {{httpheader("Cross-Origin-Embedder-Policy")}} versuchte, eine Cross-Origin-Subressource zu laden, die nicht explizit erlaubt, eingebettet zu werden (durch Setzen einer geeigneten {{httpheader("Cross-Origin-Resource-Policy")}}).
        - `"navigation"`
          - : Ein {{htmlelement("iframe")}} in einem Dokument, das entweder COEP-`require-corp`- oder `credentialless`-Direktiven hat, lädt ein Dokument, das:
            - Weder die COEP-`require-corp`- noch die `credentialless`-Direktive hat
            - Cross-Origin mit dem einbettenden Dokument ist und keinen CORP-Header hat, der das Einbetten im übergeordneten Dokument erlaubt
        - `"worker initialization"`
          - : Ein dedizierter Worker, der von einem Dokument mit entweder COEP-`require-corp`- oder `credentialless`-Direktiven erstellt wurde, versucht, ein Worker-Skript zu laden, bei dem keine dieser Direktiven gesetzt ist.

    - `blockedURL`
      - : Ein String, der die URL der Ressource enthält, die durch einen erzwungenen COEP-Verstoß vom Laden abgehalten wurde.
    - `destination` {{non-standard_inline}}
      - : Ein String, der das _Ziel_ der blockierten Ressource angibt.
        Dies kann einen der Werte von [`Request.destination`](/de/docs/Web/API/Request/destination#value) haben.
    - `disposition`
      - : Ein String, der angibt, ob der Verstoß erzwungen oder nur gemeldet wurde.
        Dieser kann einen der folgenden Werte haben:
        - `"enforce"`
          - : Der Verstoß verursachte die Blockierung des Ladens der eingebetteten Ressource.
            Dies ist der Fall bei Verstößen gegen Richtlinien, die mit {{httpheader("Cross-Origin-Embedder-Policy")}} festgelegt werden.
        - `"reporting"`
          - : Der Verstoß wurde gemeldet, ohne die Ressource am Laden zu hindern.
            Dies ist der Fall bei Verstößen gegen Richtlinien, die mit {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} festgelegt werden.

- `type`
  - : Der String `"coep"`, der angibt, dass es sich um einen COEP-Verstoßbericht handelt.

- `url`
  - : Ein String, der die URL des Dokuments repräsentiert, das den Bericht erstellt hat.

## Beschreibung

Die Richtlinien eines Dokuments zum Laden und Einbetten von Cross-Origin-Ressourcen, die im `no-cors`-Modus angefordert werden, werden mittels des {{httpheader("Cross-Origin-Embedder-Policy")}}-HTTP-Headers konfiguriert und erzwungen und können auch gemeldet, aber nicht erzwungen werden, unter Verwendung des {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}-Headers.

COEP-Richtlinienverstöße können gemeldet werden, wann immer eine durch diese Header festgelegte Richtlinie das Laden einer Ressource blockiert (oder blockieren würde).

Sie können COEP-Verstoßberichte innerhalb der Seite überwachen, die die Richtlinie festlegt, indem Sie die [Reporting API](/de/docs/Web/API/Reporting_API) verwenden.
Dazu erstellen Sie ein [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte zu lauschen, indem Sie eine Callback-Methode und eine (optionale) `options`-Eigenschaft übergeben, die die Arten von Berichten spezifiziert, die Sie berichten möchten.
Die Callback-Methode wird dann mit Berichten der angeforderten Arten aufgerufen, wobei ein Berichtsobjekt übergeben wird.
Für COEP-Verstöße wird das Objekt ein `COEPViolationReport` sein (das die [`type`](#type)-Eigenschaft mit dem Wert `"coep"` gesetzt hat).

Die Struktur eines typischen Berichts ist unten dargestellt.
Beachten Sie, dass wir sowohl die URL der Seite, deren Richtlinie verletzt wurde (`url`), als auch die Ressource, die vom Laden blockiert wurde (`body.blockedURL`), sehen können.
Wir können auch sehen, dass der Bericht durch einen `corp`-Verstoß ausgelöst wurde und dass er durch `body.disposition` erzwungen wurde (und nicht nur gemeldet).

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

Verstoßberichte können auch als JSON-Objekt in einem `POST` an einen konfigurierten [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) gesendet werden.
Der Name des Reporting-Server-Endpunkts wird in der [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#report-to_endpoint_name)-Richtliniendirektive des {{httpheader("Cross-Origin-Embedder-Policy")}}- oder {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}}-Headers spezifiziert.
Gültige Endpunktnamen und deren Zuordnung zu einer bestimmten URL werden unter Verwendung des {{httpheader("Reporting-Endpoints")}}-Headers definiert.

Die Struktur des Serverberichts ist nahezu identisch mit `COEPViolationReport`, außer dass er zusätzlich `age`- und `user_agent`-Felder enthält.

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

### Verwendung der `ReportingObserver`-Schnittstelle

Dieses Beispiel zeigt, wie Sie COEP-Verstoßberichte mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) erhalten können.

Betrachten Sie zunächst den Fall, bei dem wir eine HTML-Datei haben, die auf dem Ursprung `https://example.com` gehostet wird und ein {{htmlelement("img")}}-Element enthält, das als Quelle die (Cross-Origin) Ressource `some-image.png` festlegt.
Da das Element das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut nicht setzt, wird es im `no-cors`-Modus angefordert.
Standardmäßig, wenn `some-image.png` nicht mit dem {{httpheader("Cross-Origin-Embedder-Policy")}}-Header bereitgestellt wird, wird diese Anforderung erfolgreich sein.

```html
<img src="https://another-example.com/some-image.png" />
```

Um sicherzustellen, dass das Dokument nur Cross-Origin-Ressourcen lädt, die anzeigen, dass sie sicher im Ursprung unseres Dokuments geladen werden können, können wir den {{httpheader("Cross-Origin-Embedder-Policy")}}-Header mit der [`require-corp`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#require-corp) Direktiv wie gezeigt festlegen:

```http
Cross-Origin-Embedder-Policy: require-corp
```

Dieser Header erzwingt, dass alle Ressourcen mit dem {{HTTPHeader("Cross-Origin-Resource-Policy")}}-Header und einem Wert von `cross-origin` bereitgestellt werden müssen, um in den Dokumentursprung (`https://example.com`) geladen zu werden.
Vorausgesetzt, der Server, der `some-image.png` hostet, setzt den Header nicht, müssen wir nichts weiter tun, um einen COEP-Verstoß zu provozieren.

Um Verstöße innerhalb der Seite zu beobachten, konstruieren wir ein neues [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)-Objekt, um auf Berichte vom Typ `"coep"` zu lauschen und eine Callback-Funktion zu übergeben, die die Berichte empfängt und protokolliert.
Dieser Code muss vor dem Skript geladen werden, das den Verstoß verursacht:

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

Oben protokollieren wir jedes Verstoßberichtsobjekt und eine JSON-String-Version des Objekts, die dem unten dargestellten Objekt ähnelt.
Beachten Sie, dass der `type`-Wert `"coep"` ist.

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

Der gleiche Bericht könnte erzeugt werden, indem {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} verwendet wird, außer dass die [disposition](#disposition) als `"reporting"` gemeldet würde.

### Senden eines Berichts an einen Reporting-Endpunkt

Die Konfiguration einer Webseite zum Senden eines COEP-Berichts an einen [Reporting-Server-Endpunkt](/de/docs/Web/API/Reporting_API#reporting_server_endpoints) ist fast identisch mit dem vorherigen Beispiel.
Der einzige Unterschied besteht darin, dass wir einen Reporting-Endpunkt angeben müssen, an den die Berichte gesendet werden sollen, indem wir den {{httpheader("Reporting-Endpoints")}}-Antwort-Header verwenden und dann diese im `report-to`-Parameter beim Festlegen der Richtlinie referenzieren.

Sie sehen dies unten, wo wir den Endpunkt mit dem Namen `coep-endpoint` definieren und ihn dann in unserer Richtlinie referenzieren:

```http
Reporting-Endpoints: coep-endpoint="https://some-example.com/coep"
Cross-Origin-Embedder-Policy: require-corp; report-to="coep-endpoint"
```

Der Verstoßbericht wird dann als JSON-Objekt in einem `POST` an den durch `coep-endpoint` referenzierten Endpunkt gesendet.

Das Berichtsobjekt hat die gleiche Struktur wie das vom `ReportingObserver`-Callback zurückgegebene, mit Ausnahme der zusätzlichen `age`- und `user_agent`-Eigenschaften.

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

Der gleiche Bericht würde generiert, wenn wir {{httpheader("Cross-Origin-Embedder-Policy-Report-Only")}} auf die gleiche Weise setzen, außer dass die [disposition](#disposition) auf `"reporting"` gesetzt würde.

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
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
