---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{SeeCompatTable}}

Das `share_target` Manifestmitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Ziel im Teilen-Dialog des Systems registriert zu werden.

Sobald es registriert und installiert ist, fungiert eine PWA, die die Web Share Target API verwendet, als Inhaltsfreigabe-Ziel, zusammen mit den üblichen Systemfreigabe-Zielen wie E-Mail, Messenger und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, sehen Sie sich [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share) an.

## Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Ziel der Webfreigabe.
- `enctype` {{Optional_Inline}}
  - : Die Codierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), die verwendet werden soll. Entweder [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, zum Beispiel, wenn ein Datenpunkt wie ein Lesezeichen erstellt wird.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Schlüssel des Objekts entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des freigegebenen Dokuments verwendet wird.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder den Körper) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Ziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) von akzeptierten MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfangen von Freigabedaten mit GET

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

Wenn ein Benutzer Ihre App im Teilen-Dialog des Systems auswählt, wird Ihre PWA gestartet, und eine `GET` HTTP-Anfrage wird an die angegebene URL mit den angegebenen Abfrageparametern gesendet. Es wird so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams) Schnittstelle kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfangen von Freigabedaten mit POST

Wenn die Freigabeanforderung eine oder mehrere Dateien umfasst oder in Ihrer Anwendung eine Nebenwirkung verursacht, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode verwendet werden. Beispielsweise, wenn Ihre Anwendung Bilder zur weiteren Verarbeitung empfängt oder einen freigegebenen Link in Ihrer Datenbank als Lesezeichen speichern möchte.

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

Sie können entweder `POST` Freigabedaten mit serverseitigem Code verarbeiten oder, um eine bessere Erfahrung für Offline-Benutzer zu bieten, einen `fetch` Event-Listener verwenden, um die HTTP-Anfrage abzufangen, was Ihnen erlaubt, die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) zuzugreifen.

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

Die `POST`-Anfrage sollte idealerweise mit einem HTTP [303 See Other](/de/docs/Web/HTTP/Reference/Status/303) Redirect beantwortet werden, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn z.B. ein Seiten-Refresh vom Benutzer initiiert wurde.

### Empfangen von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein und ein `files` Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name` Eigenschaft haben, und die `accept` Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beide zu definieren, da Betriebssysteme unterschiedliche Vorlieben haben könnten.

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

Um freigegebene Dateidaten zu verarbeiten, siehe das obige `POST` Beispiel und die [`FileReader`](/de/docs/Web/API/FileReader) API, um die Dateien zu lesen. Um die Dateien von der Service Worker-Kontext zu den Client-Kontexten zu bringen, ist eine Lösung, die Dateien temporär im [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann ihre Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Webfreigabe-Ziel fungieren, wenn sie installiert wurde. Siehe auch [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit Daten sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Validieren Sie eingehende Daten, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
