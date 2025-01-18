---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: c7dc62131f2c2950a4a6ecc0b2535a4256858429
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das Manifest-Mitglied `share_target` ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), sich als Freigabeziel im Freigabedialog des Systems zu registrieren.

Sobald eine PWA registriert und installiert ist, die die Web Share Target API verwendet, fungiert sie als Ziel für die Inhaltsfreigabe, zusammen mit typischen Systemfreigabezielen wie E-Mail, Messenger und anderen nativen Apps, die freigegebene Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mithilfe der Web Share API freigeben möchten, lesen Sie [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share).

### Werte

Der Wert des Members `share_target` ist ein Objekt, das definiert, wie eine Anwendung freigegebene Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen wird dies ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten binäre Daten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, z. B. wenn ein Datenpunkt wie ein Lesezeichen erstellt wird.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters für den Titel des freigegebenen Dokuments.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder Körper) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zur freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Freigeben von Dateien verwendet wird.
      - `accept`: Ein String (oder ein Array von Strings) von akzeptierten MIME-Typen oder Dateiendungen.

## Beispiele

### Empfang von Freigabedaten mit GET

Ein Freigabeziel kann mithilfe des folgenden `share_target`-Manifest-Mitglieds registriert werden:

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet und eine `GET`-HTTP-Anfrage an die angegebene URL mit den angegebenen Abfrageparametern gesendet. Dies sieht folgendermaßen aus: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Das [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Interface kann nützlich sein, um die freigegebenen Daten in Ihrer Anwendung zu verarbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien enthält oder eine Seiteneffekt in Ihrer Anwendung verursacht, sollte die HTTP-`POST`-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder zur weiteren Verarbeitung empfängt oder einen freigegebenen Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder `POST`-Freigabedaten mit serverseitigem Code verarbeiten oder, um eine bessere Erfahrung für Offline-Benutzer zu bieten, einen `fetch`-Event-Listener verwenden, um die HTTP-Anfrage abzufangen, was den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ermöglicht.

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

Die `POST`-Anfrage wird dann idealerweise mit einer HTTP-[303 See Other](/de/docs/Web/HTTP/Status/303)-Weiterleitung beantwortet, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn beispielsweise ein Seiten-Refresh vom Benutzer initiiert wurde.

### Empfang von freigegebenen Dateien

Um freigegebene Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss die akzeptierten MIME-Typen oder Dateiendungen angeben. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme möglicherweise darin variieren, welche sie bevorzugen.

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

Um freigegebene Dateidaten zu verarbeiten, siehe das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader)-API, um die Dateien zu lesen. Um die Dateien aus dem Service Worker-Kontext in die Client-Kontexte zu übertragen, ist eine Lösung, die Dateien vorübergehend in das [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu schreiben und dann ihre Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur dann als Web Share Target agieren, wenn sie installiert ist. Siehe auch [Anleitung zur Installation von PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit den Daten sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
