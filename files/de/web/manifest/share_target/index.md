---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `share_target`-Manifestmitglied ermöglicht es installierten [Progressive Web Apps](/de/docs/Glossary/Progressive_Web_Apps) (PWAs), im Freigabedialog des Systems als Ziel für das Teilen registriert zu werden.

Nach der Registrierung und Installation dient eine PWA, die die Web Share Target API nutzt, als Ziel für das Teilen von Inhalten, zusammen mit typischen System-Freigabezielen wie E-Mail, Messenger und anderen nativen Apps, die geteilte Inhalte empfangen können.

> [!NOTE]
> Wenn Sie Daten mit der Web Share API teilen möchten, sehen Sie sich die [Web Share API](/de/docs/Web/API/Web_Share_API) und [`navigator.share()`](/de/docs/Web/API/Navigator/share) an.

### Werte

Der Wert des `share_target`-Mitglieds ist ein Objekt, das definiert, wie eine Anwendung geteilte Daten empfangen kann. Dieses Objekt kann folgende Eigenschaften enthalten (`action` und `params` sind erforderlich):

- `action`
  - : Die URL für das Web Share Target.
- `enctype` {{Optional_Inline}}
  - : Die Kodierung der freigegebenen Daten, wenn eine [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage verwendet wird. Ignoriert bei [`GET`](/de/docs/Web/HTTP/Methods/GET)-Anfragen.
- `method` {{Optional_Inline}}
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods). Entweder [`GET`](/de/docs/Web/HTTP/Methods/GET) oder [`POST`](/de/docs/Web/HTTP/Methods/POST). Verwenden Sie `POST`, wenn die geteilten Daten Binärdaten wie Bild(er) enthalten oder wenn sie die Ziel-App verändern, z. B. wenn ein Datenpunkt wie ein Lesezeichen erstellt wird.
- `params`
  - : Ein Objekt zur Konfiguration der Freigabeparameter. Die Schlüssel des Objekts entsprechen dem [`data`-Objekt in `navigator.share()`](/de/docs/Web/API/Navigator/share#parameters). Die Objektwerte können spezifiziert werden und werden als Abfrageparameter verwendet:
    - `title` {{Optional_Inline}}: Name des Abfrageparameters, der für den Titel des geteilten Dokuments verwendet werden soll.
    - `text` {{Optional_Inline}}: Name des Abfrageparameters für den Text (oder den Inhalt) der freigegebenen Nachricht.
    - `url` {{Optional_Inline}}: Name des Abfrageparameters für die URL zur freigegebenen Ressource.
    - `files` {{Optional_Inline}}: Ein Objekt (oder ein Array von Objekten), das definiert, welche Dateien vom Freigabeziel akzeptiert werden. Das Objekt erfordert die folgenden Eigenschaften:
      - `name`: Name des Formularfelds, das zum Teilen von Dateien verwendet wird.
      - `accept`: Eine Zeichenkette (oder ein Array von Zeichenketten) akzeptierter MIME-Typen oder Dateierweiterungen.

## Beispiele

### Empfang von Freigabedaten mit GET

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

Wenn ein Benutzer Ihre App im Freigabedialog des Systems auswählt, wird Ihre PWA gestartet, und eine `GET`-HTTP-Anfrage wird an die angegebene URL mit den spezifizierten Abfrageparametern gesendet. Es sieht dann so aus: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

Die [URLSearchParams](/de/docs/Web/API/URLSearchParams)-Schnittstelle kann nützlich sein, um die geteilten Daten in Ihrer Anwendung zu verarbeiten und etwas damit zu tun.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Empfang von Freigabedaten mit POST

Wenn die Freigabeanfrage eine oder mehrere Dateien beinhaltet oder eine Auswirkung auf Ihre Anwendung hat, sollte die HTTP [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode verwendet werden. Zum Beispiel, wenn Ihre Anwendung Bilder für die weitere Verarbeitung erhält oder einen geteilten Link als Lesezeichen in Ihrer Datenbank speichern möchte.

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

Sie können die `POST`-Freigabedaten entweder mit serverseitigem Code bearbeiten oder, um eine bessere Erfahrung für Offline-Benutzer zu bieten, kann ein `fetch`-Event-Listener verwendet werden, um die HTTP-Anfrage abzufangen, was es ermöglicht, die Daten in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) zuzugreifen.

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

Die `POST`-Anfrage sollte idealerweise mit einem HTTP [303 See Other](/de/docs/Web/HTTP/Status/303)-Redirect beantwortet werden, um zu vermeiden, dass mehrere `POST`-Anfragen gesendet werden, wenn beispielsweise ein Seiten-Refresh durch den Benutzer initiiert wurde.

### Empfangen von geteilten Dateien

Um geteilte Dateien zu akzeptieren, muss die HTTP-Methode `POST` sein, der `enctype` muss `multipart/form-data` sein, und ein `files`-Eintrag, der die akzeptierten Dateitypen definiert, muss bereitgestellt werden.

Dateien müssen eine `name`-Eigenschaft haben, und die `accept`-Eigenschaft muss akzeptierte MIME-Typen oder Dateierweiterungen spezifizieren. Es ist wahrscheinlich eine gute Idee, beides zu definieren, da Betriebssysteme sich darin unterscheiden können, welche sie bevorzugen.

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

Um freigegebene Datei-Daten zu verarbeiten, siehe das `POST`-Beispiel oben und die [`FileReader`](/de/docs/Web/API/FileReader) API, um die Dateien zu lesen. Um die Dateien vom Service Worker-Kontext in den Client-Kontext zu übertragen, ist eine Lösung, die Dateien vorübergehend im [`Cache`](/de/docs/Web/API/Cache) oder in [IndexedDB](/de/docs/Web/API/IndexedDB_API) zu speichern und dann ihre Clients mit [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage) zu benachrichtigen.

## Sicherheit & Datenschutz

Ihre PWA kann nur dann als Web Share Target agieren, wenn sie installiert ist. Siehe auch [How to make PWAs installable](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Ähnlich wie bei HTML-Formularübermittlungen sollten Sie vorsichtig mit Daten sein, die über das Freigabeziel an Ihre Anwendung gesendet werden. Stellen Sie sicher, dass eingehende Daten validiert werden, bevor sie genutzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
