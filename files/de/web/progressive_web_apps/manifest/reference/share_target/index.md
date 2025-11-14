---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das `share_target`-Manifestmitglied ermöglicht installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), im Teilen-Dialog des Systems als Ziel registriert zu werden.

Sobald es registriert und installiert ist, fungiert eine PWA, die die Web Share Target API verwendet, als Ziel für das Teilen von Inhalten, zusammen mit üblichen System-Teilen-Zielen wie E-Mail, Messenger und anderen nativen Apps, die geteilte Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mithilfe der Web Share API teilen möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

## Werte

Der Wert des `share_target`-Mitglieds ist ein Objekt, das definiert, wie eine Anwendung geteilte Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web-Share-Ziel.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der Teilungsdaten, wenn eine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) zu verwenden. Entweder [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST). Verwenden Sie `POST`, wenn die geteilten Daten binäre Daten wie Bild(er) umfassen oder wenn sie die Ziel-App ändern, zum Beispiel, wenn ein Datenpunkt wie ein Lesezeichen erstellt wird.
- `params`
  - : Ein Objekt zum Konfigurieren der Teilungsparameter. Die Objektschlüssel entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben und als Abfrageparameter verwendet werden:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters für den Titel des zu teilenden Dokuments.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der zu teilenden Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der zu teilenden Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Share-Ziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfeldes, das zum Teilen von Dateien verwendet wird.
      - `accept`: Eine Zeichenkette (oder ein Array von Zeichenketten) der akzeptierten MIME-Typen oder Dateiendungen.

## Beispiele

### Empfangen von Teilungsdaten mit GET

Ein Share-Ziel kann mithilfe des folgenden `share_target`-Manifestmitglieds registriert werden:

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

Wenn ein Benutzer Ihre App im Teilen-Dialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET`-HTTP-Anfrage an die bereitgestellte URL mit den angegebenen Abfrageparametern gesendet. Es wird so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Interface kann nützlich sein, um die geteilten Daten in Ihrer Anwendung zu bearbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfangen von Teilungsdaten mit POST

Wenn die Teilungsanforderung eine oder mehrere Dateien enthält oder eine Nebenwirkung in Ihrer Anwendung verursacht, sollte die HTTP-`POST`-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder zur weiteren Verarbeitung erhält oder einen geteilten Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder `POST`-Teilungsdaten mit serverseitigem Code verarbeiten oder, um ein besseres Erlebnis für Offline-Benutzer zu bieten, einen `fetch`-Ereignis-Listener verwenden, um die HTTP-Anfrage abzufangen, was es ermöglicht, auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) zuzugreifen.

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

Die `POST`-Anfrage wird dann idealerweise mit einem HTTP-[303 See Other](/de/docs/Web/HTTP/Reference/Status/303)-Redirect beantwortet, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn der Benutzer zum Beispiel einen Seiten-Refresh initiiert.

### Empfangen von geteilten Dateien

Um geteilte Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, das `enctype` muss `multipart/form-data` sein und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss vorliegen.

Dateien müssen eine `name`-Eigenschaft haben und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateiendungen angeben. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme sich darin unterscheiden können, welche sie bevorzugen.

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

Um geteilte Dateidaten zu bearbeiten, siehe das obige `POST`-Beispiel und die [`FileReader`](/de/docs/Web/API/FileReader)-API, um die Dateien zu lesen. Um die Dateien vom Service Worker-Kontext in Client-Kontexte zu überführen, besteht eine Lösung darin, die Dateien vorübergehend im [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann seine Clients mithilfe von [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web-Share-Ziel fungieren, wenn sie installiert ist. Siehe auch [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit Daten sein, die über das Share-Ziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
