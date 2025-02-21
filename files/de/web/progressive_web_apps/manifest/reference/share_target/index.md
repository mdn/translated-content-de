---
title: share_target
slug: Web/Progressive_web_apps/Manifest/Reference/share_target
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `share_target`-Manifest-Mitglied ermöglicht es installierten {{Glossary("Progressive_Web_Apps", "Progressive Web Apps")}} (PWAs), als Freigabeziel im Freigabedialog des Systems registriert zu werden.

Sobald registriert und installiert, fungiert eine PWA, die die Web Share Target API verwendet, als Ziel für die Inhaltsfreigabe, ähnlich wie typische Systemfreigabeziele wie E-Mails, Messenger und andere native Apps, die geteilte Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, sehen Sie sich [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share) an.

### Werte

Der Wert des `share_target`-Members ist ein Objekt, das definiert, wie eine Anwendung geteilte Daten empfangen kann. Dieses Objekt kann die folgenden Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Wird bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen ignoriert.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die freigegebenen Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App ändern, zum Beispiel, wenn sie einen Datenpunkt wie ein Lesezeichen erstellen.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Objektschlüssel entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können angegeben werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters für den Titel des Dokuments, das geteilt wird.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder den Körper) der Nachricht, die geteilt wird.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zur Ressource, die geteilt wird.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Eine Zeichenfolge (oder ein Array von Zeichenfolgen) der akzeptierten MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfang von Freigabedaten mit GET

Ein Freigabeziel kann mit dem folgenden `share_target`-Manifest-Mitglied registriert werden:

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet, und eine `GET` HTTP-Anfrage wird an die angegebene URL mit den spezifizierten Abfrageparametern gesendet. Das sieht dann so aus: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle kann nützlich sein, um die geteilten Daten in Ihrer Anwendung zu behandeln und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien umfasst oder eine Auswirkung in Ihrer Anwendung verursacht, sollte die HTTP-[`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode verwendet werden. Beispielsweise, wenn Ihre Anwendung Bilder für die Weiterverarbeitung empfängt oder einen geteilten Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können entweder die `POST`-Freigabedaten mit serverseitigem Code behandeln, oder, um eine bessere Erfahrung für Offline-Nutzer zu bieten, ein `fetch`-Ereignis-Listener kann verwendet werden, um die HTTP-Anfrage abzufangen, was den Zugriff auf die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) erlaubt.

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

Die `POST`-Anfrage sollte dann idealerweise mit einem HTTP [303 See Other](/de/docs/Web/HTTP/Status/303)-Redirect beantwortet werden, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, falls der Benutzer beispielsweise einen Seiten-Refresh initiiert hat.

### Empfang geteilter Dateien

Um geteilte Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein, und es muss ein `files`-Eintrag vorhanden sein, der die akzeptierten Dateitypen definiert.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen spezifizieren. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme sich unterscheiden könnten, welche sie bevorzugen.

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

Um geteilte Dateidaten zu behandeln, siehe das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader)-API, um die Dateien zu lesen. Um die Dateien vom Service Worker-Kontext in Client-Kontexte zu bringen, ist eine Lösung, die Dateien temporär im [`Cache`](/de/docs/Web/API/Cache) oder [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann seine Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur als Web Share Target fungieren, wenn sie installiert ist. Siehe auch [Anleitung zum Installierbarmachen von PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit den Daten sein, die an Ihre Anwendung über das Freigabeziel gesendet werden. Stellen Sie sicher, dass Sie eingehende Daten validieren, bevor Sie sie verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
