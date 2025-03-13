---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `share_target` Manifest-Mitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald registriert und installiert, fungiert eine PWA, die die Web Share Target API benutzt, als Ziel für die Inhaltsfreigabe, gemeinsam mit typischen Systemfreigabezielen wie E-Mail, Messengern und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mithilfe der Web Share API freigeben möchten, siehe [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des `share_target` Mitglieds ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der Freigabedaten, wenn eine [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn es die Ziel-App verändert, zum Beispiel, wenn es einen Datenpunkt wie ein Lesezeichen erstellt.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`Datenobjekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters zur Verwendung für den Titel des freigegebenen Dokuments.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Inhalt) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zur freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfeldes, das zum Teilen von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) von akzeptierten MIME-Typen oder Dateiendungen.

## Beispiele

### Empfang von freigegebenen Daten mittels GET

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET`-HTTP-Anfrage an die bereitgestellte URL mit den angegebenen Abfrageparametern gesendet. Es wird folgendermaßen aussehen: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams) Interface kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von freigegebenen Daten mittels POST

Wenn die Freigabeanforderung eine oder mehrere Dateien enthält oder einen Seiteneffekt in Ihrer Anwendung verursacht, sollte die HTTP-`POST`-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder zur weiteren Verarbeitung erhält oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können `POST` Freigabedaten entweder mit serverseitigem Code verarbeiten oder, um ein besseres Erlebnis für Offline-Nutzer zu bieten, kann ein `fetch`-Ereignis-Listener verwendet werden, um die HTTP-Anfrage abzufangen, was den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht.

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

Die `POST`-Anfrage sollte idealerweise mit einem HTTP-Redirect [303 See Other](/de/docs/Web/HTTP/Reference/Status/303) beantwortet werden, um zu vermeiden, dass mehrere `POST`-Anfragen eingereicht werden, falls der Benutzer zum Beispiel eine Seitenaktualisierung initiiert hat.

### Empfang von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, das `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateiendungen spezifizieren. Es ist wahrscheinlich eine gute Idee, beide zu definieren, da sich Betriebssysteme darin unterscheiden können, welche sie bevorzugen.

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

Um freigegebene Dateidaten zu verarbeiten, siehe das obige `POST`-Beispiel und die [`FileReader`](/de/docs/Web/API/FileReader) API, um die Dateien zu lesen. Um die Dateien vom Service Worker Kontext in Client-Kontexte zu bringen, ist eine Möglichkeit, die Dateien vorübergehend in den [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu schreiben und dann seine Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als ein Web Share Target agieren, wenn sie installiert wurde. Siehe auch [Anleitung, wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie bei den Daten, die an Ihre Anwendung über das Freigabeziel gesendet werden, vorsichtig sein. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
