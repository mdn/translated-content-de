---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`BackgroundFetchRegistration`**-Schnittstelle der {{domxref('Background Fetch API','','',' ')}} repräsentiert einen individuellen Hintergrundabruf.

Eine `BackgroundFetchRegistration`-Instanz wird von den Methoden {{domxref("BackgroundFetchManager.fetch()")}} oder {{domxref("BackgroundFetchManager.get()")}} zurückgegeben, daher gibt es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("BackgroundFetchRegistration.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die ID des Hintergrundabrufs enthält.
- {{domxref("BackgroundFetchRegistration.uploadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Gesamtanzahl der hochzuladenden Bytes enthält.
- {{domxref("BackgroundFetchRegistration.uploaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die erfolgreich gesendete Größe in Bytes enthält, anfangs `0`.
- {{domxref("BackgroundFetchRegistration.downloadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die Gesamtgröße in Bytes dieses Downloads enthält. Dies ist der Wert, der beim Registrieren des Hintergrundabrufs festgelegt wurde, oder `0`.
- {{domxref("BackgroundFetchRegistration.downloaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine {{jsxref("number")}}, die die heruntergeladene Größe in Bytes darstellt, anfangs `0`.
- {{domxref("BackgroundFetchRegistration.result")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt initial einen leeren String zurück, bei Abschluss entweder den String `"success"` oder `"failure"`.
- {{domxref("BackgroundFetchRegistration.failureReason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String mit einem Wert, der einen Grund für ein Scheitern des Hintergrundabrufs angibt. Kann einer der folgenden Werte sein: `""`, `"aborted"`, `"bad-status"`, `"fetch-error"`, `"quota-exceeded"`, `"download-total-exceeded"`.
- {{domxref("BackgroundFetchRegistration.recordsAvailable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob das `recordsAvailable`-Flag gesetzt ist.

## Instanzmethoden

_Erbt auch Methoden von ihrem Elternteil, {{domxref("EventTarget")}}._

- {{domxref("BackgroundFetchRegistration.abort()")}} {{Experimental_Inline}}
  - : Bricht den Hintergrundabruf ab. Gibt ein {{jsxref("Promise")}} zurück, das mit `true` aufgelöst wird, wenn der Abruf erfolgreich abgebrochen wurde.
- {{domxref("BackgroundFetchRegistration.match()")}} {{Experimental_Inline}}
  - : Gibt ein einzelnes {{domxref("BackgroundFetchRecord")}}-Objekt zurück, das der erste Treffer für die Argumente ist.
- {{domxref("BackgroundFetchRegistration.matchAll()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("BackgroundFetchRecord")}}-Objekten aufgelöst wird, die Anfragen und Antworten enthalten.

## Ereignisse

_Erbt auch Ereignisse von ihrem Elternteil, {{domxref("EventTarget")}}._

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} ab oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("BackgroundFetchRegistration/progress_event", "progress")}} {{Experimental_Inline}}

  - : Wird ausgelöst, wenn es eine Änderung an einer der folgenden Eigenschaften gibt:
    {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
    {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
    {{domxref("BackgroundFetchRegistration.result", "result")}} oder
    {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Beispiele

Der folgende Code erstellt eine `BackGroundFetchRegistration` als `bgFetch`, mit einer `id` von `"my-fetch"`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interessante Dinge.",
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

Das Protokollieren der {{domxref("BackgroundFetchRegistration.id","id")}} in der Konsole gibt `"my-fetch"` zurück.

```js
console.log(bgFetch.id); // "my-fetch"
```

Die Methode {{domxref("BackgroundFetchRegistration.match","match()")}} kann verwendet werden, um einen bestimmten {{domxref("BackgroundFetchRecord")}} aus denen zu finden, die Teil der Registrierung sind.

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
