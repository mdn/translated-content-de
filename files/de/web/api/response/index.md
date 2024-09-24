---
title: Antwort
slug: Web/API/Response
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`Response`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Antwort auf eine Anfrage.

Sie können ein neues `Response`-Objekt mithilfe des {{domxref("Response.Response", "Response()")}}-Konstruktors erstellen. Es ist jedoch wahrscheinlicher, dass Ihnen ein `Response`-Objekt als Ergebnis einer anderen API-Operation begegnet – beispielsweise ein Service Worker {{domxref("FetchEvent.respondWith")}} oder ein einfacher {{domxref("Window/fetch", "fetch()")}}.

## Konstruktor

- {{domxref("Response.Response","Response()")}}
  - : Erstellt ein neues `Response`-Objekt.

## Instanzeigenschaften

- {{domxref("Response.body")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ReadableStream")}} des Körperinhalts.
- {{domxref("Response.bodyUsed")}} {{ReadOnlyInline}}
  - : Speichert einen booleschen Wert, der angibt, ob der Körper in einer Antwort bereits verwendet wurde.
- {{domxref("Response.headers")}} {{ReadOnlyInline}}
  - : Das mit der Antwort verknüpfte {{domxref("Headers")}}-Objekt.
- {{domxref("Response.ok")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Antwort erfolgreich war (Status im Bereich `200` – `299`) oder nicht.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Antwort das Ergebnis einer Umleitung ist (d. h. seine URL-Liste mehr als einen Eintrag hat).
- {{domxref("Response.status")}} {{ReadOnlyInline}}
  - : Der Statuscode der Antwort. (Dies wird `200` für einen Erfolg sein).
- {{domxref("Response.statusText")}} {{ReadOnlyInline}}
  - : Die Statusmeldung, die dem Statuscode entspricht. (z. B. `OK` für `200`).
- {{domxref("Response.type")}} {{ReadOnlyInline}}
  - : Der Typ der Antwort (z. B. `basic`, `cors`).
- {{domxref("Response.url")}} {{ReadOnlyInline}}
  - : Die URL der Antwort.

## Statische Methoden

- {{domxref("Response.error_static","Response.error()")}}
  - : Gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verknüpft ist.
- {{domxref("Response.redirect_static", "Response.redirect()")}}
  - : Gibt eine neue Antwort mit einer anderen URL zurück.
- {{domxref("Response.json_static", "Response.json()")}}
  - : Gibt ein neues `Response`-Objekt zurück, um die bereitgestellten JSON-codierten Daten zurückzugeben.

## Instanzmethoden

- {{domxref("Response.arrayBuffer()")}}
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Antwortkörpers aufgelöst wird.
- {{domxref("Response.blob()")}}
  - : Gibt ein Versprechen zurück, das mit einer {{domxref("Blob")}}-Darstellung des Antwortkörpers aufgelöst wird.
- {{domxref("Response.bytes()")}}
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Antwortkörpers aufgelöst wird.
- {{domxref("Response.clone()")}}
  - : Erstellt einen Klon eines `Response`-Objekts.
- {{domxref("Response.formData()")}}
  - : Gibt ein Versprechen zurück, das mit einer {{domxref("FormData")}}-Darstellung des Antwortkörpers aufgelöst wird.
- {{domxref("Response.json()")}}
  - : Gibt ein Versprechen zurück, das mit dem Ergebnis des Parsens des Antwortkörpertexts als {{jsxref("JSON")}} aufgelöst wird.
- {{domxref("Response.text()")}}
  - : Gibt ein Versprechen zurück, das mit einer Textdarstellung des Antwortkörpers aufgelöst wird.

## Beispiele

### Abrufen eines Bildes

In unserem [einfachen Fetch-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([Beispiel live ausführen](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) verwenden wir einen einfachen `fetch()`-Aufruf, um ein Bild abzurufen und es in einem {{htmlelement("img")}}-Element anzuzeigen. Der `fetch()`-Aufruf gibt ein Versprechen zurück, das auf das `Response`-Objekt aufgelöst wird, das mit dem Ressourcenabrufvorgang verknüpft ist.

Sie werden feststellen, dass wir, da wir ein Bild anfordern, {{domxref("Response.blob")}} ausführen müssen, um der Antwort den richtigen MIME-Typ zu geben.

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

Sie können auch den {{domxref("Response.Response", "Response()")}}-Konstruktor verwenden, um Ihr eigenes benutzerdefiniertes `Response`-Objekt zu erstellen:

```js
const response = new Response();
```

### Ein PHP-Aufruf

Hier rufen wir eine PHP-Programmdatei auf, die eine JSON-Zeichenkette generiert und das Ergebnis als JSON-Wert anzeigt.

```js
// Funktion, um JSON mit PHP abzurufen
const getJSON = async () => {
  // Erzeugen Sie das Response-Objekt
  const response = await fetch("getJSON.php");
  if (response.ok) {
    // JSON-Wert aus dem Antwortkörper abrufen
    return response.json();
  }
  throw new Error("*** PHP file not found");
};

// Rufen Sie die Funktion auf und geben Sie den Wert oder die Fehlermeldung in der Konsole aus
getJSON()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
