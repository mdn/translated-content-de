---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`BackgroundFetchRegistration`**-Interface der [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) repräsentiert einen individuellen Hintergrundabruf.

Eine Instanz von `BackgroundFetchRegistration` wird durch die Methoden [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) oder [`BackgroundFetchManager.get()`](/de/docs/Web/API/BackgroundFetchManager/get) zurückgegeben und hat daher keinen Konstruktor.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Objekt, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BackgroundFetchRegistration.id`](/de/docs/Web/API/BackgroundFetchRegistration/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die ID des Hintergrundabrufs enthält.
- [`BackgroundFetchRegistration.uploadTotal`](/de/docs/Web/API/BackgroundFetchRegistration/uploadTotal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Gesamtanzahl der hochzuladenden Bytes enthält.
- [`BackgroundFetchRegistration.uploaded`](/de/docs/Web/API/BackgroundFetchRegistration/uploaded) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Größe in Bytes angibt, die erfolgreich gesendet wurde, zunächst `0`.
- [`BackgroundFetchRegistration.downloadTotal`](/de/docs/Web/API/BackgroundFetchRegistration/downloadTotal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Gesamtgröße in Bytes dieses Downloads enthält. Dies ist der Wert, der festgelegt wurde, als der Hintergrundabruf registriert wurde, oder `0`.
- [`BackgroundFetchRegistration.downloaded`](/de/docs/Web/API/BackgroundFetchRegistration/downloaded) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Größe in Bytes angibt, die heruntergeladen wurde, zunächst `0`.
- [`BackgroundFetchRegistration.result`](/de/docs/Web/API/BackgroundFetchRegistration/result) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt anfangs einen leeren String zurück, bei Abschluss entweder den String `"success"` oder `"failure"`.
- [`BackgroundFetchRegistration.failureReason`](/de/docs/Web/API/BackgroundFetchRegistration/failureReason) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit einem Wert, der einen Grund für einen Hintergrundabruf-Fehlschlag anzeigt. Kann einer der folgenden Werte sein: `""`, `"aborted"`, `"bad-status"`, `"fetch-error"`, `"quota-exceeded"`, `"download-total-exceeded"`.
- [`BackgroundFetchRegistration.recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob das `recordsAvailable`-Flag gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Objekt, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`BackgroundFetchRegistration.abort()`](/de/docs/Web/API/BackgroundFetchRegistration/abort) {{Experimental_Inline}}
  - : Bricht den Hintergrundabruf ab. Gibt ein {{jsxref("Promise")}} zurück, das mit `true` aufgelöst wird, wenn der Abruf erfolgreich abgebrochen wurde.
- [`BackgroundFetchRegistration.match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) {{Experimental_Inline}}
  - : Gibt ein einzelnes [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekt zurück, das das erste Übereinstimmungsergebnis für die Argumente ist.
- [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekten aufgelöst wird, die Anfragen und Antworten enthalten.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Objekt, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab, oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`progress`](/de/docs/Web/API/BackgroundFetchRegistration/progress_event) {{Experimental_Inline}}

  - : Wird ausgelöst, wenn es eine Änderung an einer der folgenden Eigenschaften gibt:
    [`uploaded`](/de/docs/Web/API/BackgroundFetchRegistration/uploaded),
    [`downloaded`](/de/docs/Web/API/BackgroundFetchRegistration/downloaded),
    [`result`](/de/docs/Web/API/BackgroundFetchRegistration/result) oder
    [`failureReason`](/de/docs/Web/API/BackgroundFetchRegistration/failureReason).

## Beispiele

Der folgende Code erstellt eine `BackGroundFetchRegistration` als `bgFetch`, mit einer `id` von `"my-fetch"`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

Das Protokollieren der [`id`](/de/docs/Web/API/BackgroundFetchRegistration/id) in die Konsole gibt `"my-fetch"` zurück.

```js
console.log(bgFetch.id); // "my-fetch"
```

Die Methode [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) kann verwendet werden, um ein bestimmtes [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) aus denjenigen zu finden, die Teil der Registrierung sind.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
