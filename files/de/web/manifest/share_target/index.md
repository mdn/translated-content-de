---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Der `share_target` Manifestmitglied ermöglicht es installierten [Progressive Web Apps](/de/docs/Glossary/Progressive_Web_Apps) (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald sie registriert und installiert sind, fungiert eine PWA, die die Web Share Target API nutzt, als Ziel für die Inhaltsteilung zusammen mit den typischen Systemfreigabezielen wie E-Mail, Messenger und anderen nativen Apps, die geteilte Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung geteilte Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web-Freigabeziel.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die geteilten Daten Binärdaten wie Bild(er) enthalten oder die Ziel-App verändern, z.B. wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objekt-Schlüssel entsprechen dem [`Datenobjekt in navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des geteilten Dokuments verwendet wird.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der geteilten Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der geteilten Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Eine Zeichenkette (oder ein Array von Zeichenketten) der akzeptierten MIME-Typen oder Dateierweiterungen.

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet, und eine `GET` HTTP-Anfrage wird an die bereitgestellte URL mit den angegebenen Abfrageparametern gesendet. Sie wird folgendermaßen aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams) Interface kann nützlich sein, um die geteilten Daten in Ihrer Anwendung zu handhaben und etwas damit zu machen.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien umfasst oder eine Nebenwirkung in Ihrer Anwendung verursacht, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode verwendet werden. Beispielsweise, wenn Ihre Anwendung Bilder für die weitere Verarbeitung empfängt oder einen geteilten Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder `POST` Freigabedaten mit serverseitigem Code verarbeiten, oder, um eine bessere Erfahrung für Offline-Nutzer zu bieten, ein `fetch`-Event-Listener verwenden, um die HTTP-Anfrage abzufangen, was es ermöglicht, auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) zuzugreifen.

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

Die `POST`-Anfrage sollte dann idealerweise mit einer HTTP [303 See Other](/de/docs/Web/HTTP/Status/303) Umleitung beantwortet werden, um zu verhindern, dass mehrere `POST`-Anfragen gesendet werden, falls der Benutzer beispielsweise eine Seite neu lädt.

### Empfang von geteilten Dateien

Um geteilte Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da sich Betriebssysteme darin unterscheiden könnten, welche sie bevorzugen.

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

Um geteilte Dateidaten zu handhaben, siehe das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader) API, um die Dateien zu lesen. Um die Dateien vom Service Worker-Kontext zu den Client-Kontexten zu übertragen, ist eine Lösung, die Dateien vorübergehend in den [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu schreiben und dann seine Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur dann als ein Web-Freigabeziel agieren, wenn sie installiert wurde. Siehe auch [Anleitung, wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübertragungen sollten Sie vorsichtig mit den Daten umgehen, die Ihrer Anwendung über das Freigabeziel gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten vor der Verwendung validieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
