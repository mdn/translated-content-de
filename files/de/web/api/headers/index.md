---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 98b1752bbde3987c1c445b038aa4a463dccff6b8
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Mit der **`Headers`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) können Sie verschiedene Aktionen für [HTTP-Request- und -Response-Header](/de/docs/Web/HTTP/Reference/Headers) ausführen. Dazu gehören das Abrufen, Setzen, Ergänzen und Entfernen von Headern aus der Header-Liste des Objekts.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers), [`Response.headers`](/de/docs/Web/API/Response/headers) und [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) abrufen oder mit dem Konstruktor [`Headers()`](/de/docs/Web/API/Headers/Headers) ein neues `Headers`-Objekt erstellen.
Im Vergleich zu einfachen Objekten bietet die Verwendung von `Headers`-Objekten beim Senden von Requests eine zusätzliche Bereinigung der Eingaben. Beispielsweise werden Header-Namen in Kleinbuchstaben umgewandelt, führende und nachgestellte Leerzeichen aus Header-Werten entfernt und das Setzen bestimmter Header verhindert.

> [!NOTE]
> Weitere Informationen zu den verfügbaren Headern finden Sie in unserer Referenz zu [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers).

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Hängt einen neuen Wert an einen vorhandenen Header in einem `Headers`-Objekt an oder fügt den Header hinzu, falls er noch nicht vorhanden ist.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel-Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}}-Zeichenfolge mit allen Werten eines Headers mit dem angegebenen Namen innerhalb eines `Headers`-Objekts zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array mit den Werten aller einer Response zugeordneten {{httpheader("Set-Cookie")}}-Header zurück.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem Sie alle Schlüssel der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt oder fügt den Header hinzu, falls er noch nicht vorhanden ist.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem Sie alle Werte der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.

> [!NOTE]
> Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass [`Headers.set()`](/de/docs/Web/API/Headers/set) einen vorhandenen Wert durch den neuen Wert ersetzt, wenn der angegebene Header bereits vorhanden ist und mehrere Werte zulässt. [`Headers.append()`](/de/docs/Web/API/Headers/append) hängt den neuen Wert hingegen an das Ende der vorhandenen Werte an. Codebeispiele finden Sie auf den jeweiligen Seiten.

> [!NOTE]
> Beim Durchlaufen von Header-Werten werden diese automatisch in lexikografischer Reihenfolge sortiert. Werte von Headern mit demselben Namen werden zusammengefasst.

## Beschreibung

Ein `Headers`-Objekt besitzt eine zugehörige Header-Liste, die anfangs leer ist und aus null oder mehr Name-Wert-Paaren besteht. Sie können dieser Liste mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) Einträge hinzufügen (siehe [Beispiele](#beispiele)).
Bei allen Methoden dieser Schnittstelle werden Header-Namen anhand einer Bytefolge verglichen, ohne zwischen Groß- und Kleinschreibung zu unterscheiden.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur statt mit [`entries()`](/de/docs/Web/API/Headers/entries) verwendet werden: `for (const p of myHeaders)` entspricht `for (const p of myHeaders.entries())`.

### Einschränkungen bei Änderungen

Bei einigen `Headers`-Objekten ist eingeschränkt, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) die Header verändern dürfen.
Welche Einschränkungen gelten, hängt davon ab, wie das `Headers`-Objekt erstellt wurde:

- Für Header, die mit dem Konstruktor [`Headers()`](/de/docs/Web/API/Headers/Headers) erstellt wurden, gelten keine Einschränkungen bei Änderungen.
- Für Header von [`Request`](/de/docs/Web/API/Request)-Objekten:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) des Requests `no-cors` ist, können Sie Namen und Werte aller {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}} ändern.
  - Andernfalls können Sie Namen und Werte aller {{Glossary("forbidden_request_header", "nicht verbotenen Request-Header")}} ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response)-Objekten:
  - Wenn die Response mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder von einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) empfangen wurde, sind die Header unveränderlich.
  - Wenn die Response dagegen mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie Namen und Werte aller {{Glossary("forbidden_response_header_name", "nicht verbotenen Response-Header")}} ändern.
- Header, die von der Eigenschaft [`WebTransport.responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) zurückgegeben werden, sind unveränderlich.

Alle `Headers`-Methoden lösen einen {{jsxref("TypeError")}} aus, wenn Sie einen Namen übergeben, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Änderungsoperationen lösen einen `TypeError` aus, wenn der Header unveränderlich ist. In allen anderen Fehlerfällen schlagen sie ohne Fehlermeldung fehl.

## Beispiele

Im folgenden Ausschnitt erstellen wir mit dem Konstruktor `Headers()` ein neues `Headers`-Objekt, fügen ihm mit `append()` einen Header hinzu und rufen dessen Wert anschließend mit `get()` ab:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Dasselbe lässt sich erreichen, indem Sie dem Konstruktor ein Array aus Arrays oder ein Objektliteral übergeben:

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// or, using an array of arrays:
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // should return 'text/xml'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
