---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
  </tbody>
</table>

Das `share_target`-Manifestmitglied ermöglicht installierten {{Glossary("Progressive Web Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald registriert und installiert, fungiert eine PWA, die die Web Share Target API verwendet, als Ziel für die Inhaltsfreigabe, zusammen mit typischen Systemfreigabezielen wie E-Mail, Messengern und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, sehen Sie sich die [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share) an.

## Eigenschaften

Um zu definieren, wie eine Anwendung Freigabedaten empfangen kann, kann ein `share_target`-Objekt im Manifest die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share-Ziel.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der Freigabedaten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App verändern, beispielsweise wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des freigegebenen Dokuments verwendet wird.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder den Körper) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zur Freigabe von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) akzeptierter MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfangen von Freigabedaten mit GET

Ein Freigabeziel kann mit folgendem `share_target`-Manifestmitglied registriert werden:

```json
{
  "share_target": {
    "action": "/shared-content-receiver/",
    "method": "GET",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link"
    }
  }
}
```

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET`-HTTP-Anfrage an die angegebene URL gesendet, einschließlich der angegebenen Abfrageparameter. Es wird in etwa so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Interface kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfangen von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien enthält oder in Ihrer Anwendung eine Nebenwirkung verursacht, sollte die HTTP-`POST`-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder für die Weiterverarbeitung erhält oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

```json
{
  "share_target": {
    "action": "/save-bookmark/",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "url": "link"
    }
  }
}
```

Sie können die `POST`-Freigabedaten entweder mit serverseitigem Code verarbeiten oder, um eine bessere Erfahrung für Nutzer im Offline-Modus zu bieten, kann ein `fetch`-Eventlistener verwendet werden, um die HTTP-Anfrage abzufangen, was den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht.

```js
self.addEventListener("fetch", (event) => {
  // Reguläre Anfragen, die nicht mit dem Web Share Target zusammenhängen.
  if (event.request.method !== "POST") {
    event.respondWith(fetch(event.request));
    return;
  }

  // Anfragen, die mit dem Web Share Target zusammenhängen.
  event.respondWith(
    (async () => {
      const formData = await event.request.formData();
      const link = formData.get("link") || "";
      // Anstelle der ursprünglichen URL `/save-bookmark/` den
      // Benutzer zu einer URL umleiten, die von der `saveBookmark()`
      // Funktion zurückgegeben wird, z. B. `/`.
      const responseUrl = await saveBookmark(link);
      return Response.redirect(responseUrl, 303);
    })(),
  );
});
```

Die `POST`-Anfrage wird dann idealerweise mit einem HTTP-[303 See Other](/de/docs/Web/HTTP/Status/303)-Redirect beantwortet, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, falls der Benutzer z. B. einen Seiten-Refresh initiiert hat.

### Empfangen von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss vorhanden sein.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen spezifizieren. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme möglicherweise in ihrer Präferenz unterschiedlich sind.

```json
{
  "share_target": {
    "action": "/file-collector",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link",
      "files": [
        {
          "name": "lists",
          "accept": ["text/csv", ".csv"]
        },
        {
          "name": "photos",
          "accept": ["image/svg+xml", ".svg"]
        }
      ]
    }
  }
}
```

Um mit freigegebenen Dateidaten umzugehen, sehen Sie sich das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader)-API an, um die Dateien zu lesen. Um die Dateien aus dem Service-Worker-Kontext in Client-Kontexte zu übertragen, ist eine Lösung, die Dateien vorübergehend im [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann seine Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web Share-Ziel fungieren, wenn sie installiert wurde. Siehe auch [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie bei Daten vorsichtig sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass eingehende Daten validiert werden, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
