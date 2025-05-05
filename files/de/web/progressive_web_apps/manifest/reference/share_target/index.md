---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `share_target`-Manifestmitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressiven Web-Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Nach der Registrierung und Installation fungiert eine PWA, die die Web Share Target API verwendet, als Ziel für die Inhaltsfreigabe, zusammen mit typischen Freigabezielen des Systems wie E-Mail, Messengern und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mithilfe der Web Share API freigeben möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des `share_target`-Mitglieds ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web-Freigabeziel.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage verwendet wird. Bei [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), die verwendet werden soll. Entweder [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, zum Beispiel, wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters für den Titel des freigegebenen Dokuments.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text oder Körper der Nachricht, die freigegeben wird.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL der freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfeldes, das zum Freigeben von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) der akzeptierten MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfangen freigegebener Daten mit GET

Ein Freigabeziel kann mit dem folgenden `share_target`-Manifestmitglied registriert werden:

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET`-HTTP-Anfrage an die angegebene URL zusammen mit den angegebenen Abfrageparametern gesendet. Sie wird so aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten und etwas mit ihnen zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfangen freigegebener Daten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien enthält oder eine Seiteneffekte in Ihrer Anwendung verursacht, sollte die HTTP-`POST`-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder zur weiteren Verarbeitung erhält oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können die `POST`-Freigabedaten entweder mit serverseitigem Code verarbeiten oder, um ein besseres Erlebnis für Offline-Nutzer zu bieten, ein `fetch`-Event-Listener verwenden, um die HTTP-Anfrage abzufangen, die den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht.

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

Die `POST`-Anfrage wird dann idealerweise mit einem HTTP-[303 See Other](/de/docs/Web/HTTP/Reference/Status/303)-Redirect beantwortet, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn ein Seitenaktualisierung durch den Benutzer initiiert wird.

### Empfangen von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, das `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen angeben. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme sich unterscheiden können, welche sie bevorzugen.

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

Um freigegebene Dateidaten zu verarbeiten, siehe das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader)-API, um die Dateien zu lesen. Um die Dateien vom Kontext des Service Workers zu Client-Kontexten zu übertragen, ist eine Lösung, die Dateien vorübergehend in das [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu schreiben und dann seine Clients mittels [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web-Freigabeziel fungieren, wenn sie installiert ist. Siehe auch [Anleitung zur Installation von PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit den Daten sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Validieren Sie eingehende Daten, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
