---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Der `share_target` Manifest-Mitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Ziel im Freigabe-Dialog des Systems registriert zu werden.

Sobald eine Registrierung und Installation erfolgt ist, fungiert eine PWA, die die Web Share Target API verwendet, als Ziel für die Inhaltsfreigabe, zusammen mit typischen Systemfreigabezielen wie E-Mail, Messenger und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, sehen Sie sich die [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share) an.

### Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der Freigabedaten, wenn eine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Anfrage verwendet wird. Ignoriert bei [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) Anfragen.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anforderungsmethode](/de/docs/Web/HTTP/Reference/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, z. B. wenn ein Datenpunkt wie ein Lesezeichen erstellt wird.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Schlüssel des Objekts entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben und als Abfrageparameter verwendet werden:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des freigegebenen Dokuments verwendet werden soll.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zu der freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Eine Zeichenfolge (oder ein Array von Zeichenfolgen) der akzeptierten MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfang von Freigabedaten mittels GET

Ein Freigabeziel kann mit dem folgenden `share_target` Manifest-Mitglied registriert werden:

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

Wenn ein Benutzer Ihre App im Freigabe-Dialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET` HTTP-Anfrage an die angegebene URL unter Einbeziehung der angegebenen Abfrageparameter gesendet. Sie wird so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams) Interface kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mittels POST

Wenn die Freigabeanfrage eine oder mehrere Dateien umfasst oder eine Nebenwirkung in Ihrer Anwendung verursacht, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder zum Weiterverarbeiten empfängt oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können `POST` Freigabedaten entweder mit serverseitigem Code verarbeiten oder, um eine bessere Erfahrung für Offline-Benutzer zu bieten, einen `fetch`-Ereignislistener verwenden, um die HTTP-Anfrage abzufangen, wodurch der Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht wird.

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

Die `POST` Anfrage wird dann idealerweise mit einer HTTP [303 See Other](/de/docs/Web/HTTP/Reference/Status/303) Umleitung beantwortet, um zu vermeiden, dass mehrere `POST` Anfragen gesendet werden, falls ein Seiten-Refresh vom Benutzer initiiert wurde.

### Empfang von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, das `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name` Eigenschaft haben, und die `accept` Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beide zu definieren, da sich Betriebssysteme möglicherweise darin unterscheiden, welche sie bevorzugen.

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

Um freigegebene Datei-Daten zu bearbeiten, siehe das `POST` Beispiel oben und das [`FileReader`](/de/docs/Web/API/FileReader) API zum Lesen der Dateien. Um die Dateien aus dem Kontext des Service Workers in die Client-Kontexte zu bringen, ist eine Lösung, die Dateien temporär in dem [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann die Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web Share Target agieren, wenn sie installiert wurde. Siehe auch [Anleitung zum Installieren von PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie bei Daten, die über das Freigabeziel an Ihre Anwendung gesendet werden, vorsichtig sein. Stellen Sie sicher, dass eingehende Daten vor der Verwendung validiert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
