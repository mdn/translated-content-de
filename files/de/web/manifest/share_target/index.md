---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: 3344de5f35ac61024cb699883754090ed29b6f96
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}{{non-standard_header}}

Das `share_target` Manifestmitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald eine PWA registriert und installiert ist, die die Web Share Target API verwendet, agiert sie als Ziel für die Freigabe von Inhalten, zusammen mit typischen systemeigenen Freigabezielen wie E-Mail, Messenger und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API freigeben möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann folgende Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der Freigabedaten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten binäre Daten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, z. B. wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Schlüssel des Objekts entsprechen dem [`data` Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Werte des Objekts können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters zur Verwendung für den Titel des freigegebenen Dokuments.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das für die Freigabe von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) der akzeptierten MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfang von Freigabedaten mit GET

Ein Freigabeziel kann mit dem folgenden `share_target` Manifestmitglied registriert werden:

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet, und eine `GET` HTTP-Anfrage wird an die angegebene URL gesendet, einschließlich der spezifizierten Abfrageparameter. Es sieht dann so aus: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams) Schnittstelle kann nützlich sein, um mit den in Ihrer Anwendung geteilten Daten umzugehen und etwas damit zu machen.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien enthält oder einen Seiteneffekt in Ihrer Anwendung verursacht, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Methods/POST) Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder für die weitere Verarbeitung erhält oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder serverseitigen Code verwenden, um die `POST` Freigabedaten zu verarbeiten, oder ein `fetch` Ereignislistener kann verwendet werden, um die HTTP-Anfrage abzufangen, was den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht und eine bessere Erfahrung für Offline-Nutzer bietet.

```js
self.addEventListener("fetch", (event) => {
  // Regular requests not related to Web Share Target.
  if (event.request.method !== "POST") {
    event.respondWith(fetch(event.request));
    return;
  }

  // Requests related to Web Share Target.
  event.respondWith(
    (async () => {
      const formData = await event.request.formData();
      const link = formData.get("link") || "";
      // Instead of the original URL `/save-bookmark/`, redirect
      // the user to a URL returned by the `saveBookmark()`
      // function, for example, `/`.
      const responseUrl = await saveBookmark(link);
      return Response.redirect(responseUrl, 303);
    })(),
  );
});
```

Die `POST` Anfrage sollte idealerweise mit einem HTTP [303 See Other](/de/docs/Web/HTTP/Status/303) Redirect beantwortet werden, um zu vermeiden, dass mehrere `POST` Anfragen gesendet werden, wenn beispielsweise ein Seitenneuladen durch den Benutzer initiiert wurde.

### Empfang von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, die `enctype` muss `multipart/form-data` sein, und ein `files` Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name` Eigenschaft haben, und die `accept` Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beide zu definieren, da Betriebssysteme sich darin unterscheiden können, welches sie bevorzugen.

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

Um mit freigegebenen Datei-Daten umzugehen, siehe das `POST` Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader) API, um die Dateien zu lesen. Um die Dateien vom Service Worker-Kontext zu den Client-Kontexten zu bekommen, ist es eine Möglichkeit, die Dateien vorübergehend im [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann seine Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web-Freigabeziel fungieren, wenn sie installiert ist. Siehe auch [Anleitung zum Installieren von PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit Daten umgehen, die über das Freigabeziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
