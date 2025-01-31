---
title: share_target
slug: Web/Manifest/Reference/share_target
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `share_target` Manifest-Mitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald sie registriert und installiert sind, fungieren PWAs, die die Web Share Target API verwenden, als Ziel für das Teilen von Inhalten, zusammen mit typischen System-Freigabezielen wie E-Mail, Messenger und anderen nativen Apps, die geteilte Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung geteilte Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Ziel.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der zu teilenden Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST) Anfrage verwendet wird. Bei [`GET`](/de/docs/Web/HTTP/Methods/GET) Anfragen wird sie ignoriert.
- `method` {{Optional_Inline}}
  - : Die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods), die verwendet werden soll. Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die geteilten Daten binäre Daten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, z.B. wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`data` Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben und als Abfrageparameter verwendet werden:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des zu teilenden Dokuments verwendet wird.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der zu teilenden Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zur teilenden Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) akzeptierter MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfangen von Freigabedaten mit GET

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

Wenn ein Nutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET` HTTP-Anfrage an die angegebene URL mit den festgelegten Abfrageparametern gesendet. Es wird so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams) Schnittstelle kann nützlich sein, um die geteilten Daten in Ihrer Anwendung zu verarbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfangen von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien enthält oder einen Nebeneffekt in Ihrer Anwendung verursacht, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Methods/POST) Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder für die weitere Verarbeitung erhält oder einen geteilten Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder die `POST` Freigabedaten mit serverseitigem Code verarbeiten oder, um eine bessere Erfahrung für Offline-Nutzer zu bieten, kann ein `fetch`-Ereignislistener verwendet werden, um die HTTP-Anfrage abzufangen, wodurch der Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) möglich ist.

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

Die `POST`-Anfrage wird dann idealerweise mit einer HTTP [303 See Other](/de/docs/Web/HTTP/Status/303) Weiterleitung beantwortet, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn z.B. ein Seitenaktualisierung vom Benutzer initiiert wurde.

### Empfang von geteilten Dateien

Um geteilte Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein, und ein `files` Eintrag, der die Arten der akzeptierten Dateien definiert, muss bereitgestellt werden.

Dateien müssen eine `name` Eigenschaft haben, und die `accept` Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme sich unterscheiden können, welche sie bevorzugen.

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

Zum Umgang mit geteilten Dateidaten siehe das `POST` Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader) API zum Lesen der Dateien. Um die Dateien vom Service-Worker-Kontext an die Client-Kontexte zu übergeben, ist eine Lösung, die Dateien vorübergehend in der [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann ihre Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web Share Ziel agieren, wenn sie installiert wurde. Siehe auch [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit den Daten sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
