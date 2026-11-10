---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Mit der **`Headers`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) können Sie verschiedene Aktionen mit [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Reference/Headers) ausführen. Dazu gehören das Abrufen, Setzen, Ergänzen und Entfernen von Headern aus der Header-Liste einer Anfrage.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und mit dem Konstruktor [`Headers()`](/de/docs/Web/API/Headers/Headers) ein neues `Headers`-Objekt erstellen. Im Vergleich zu einfachen Objekten bietet die Verwendung von `Headers`-Objekten beim Senden von Anfragen eine zusätzliche Bereinigung der Eingaben. Beispielsweise werden Header-Namen in Kleinbuchstaben umgewandelt, führende und nachfolgende Leerzeichen aus Header-Werten entfernt und das Setzen bestimmter Header verhindert.

> [!NOTE]
> Weitere Informationen zu den verfügbaren Headern finden Sie in unserer Referenz zu [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers).

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Hängt einen neuen Wert an einen vorhandenen Header in einem `Headers`-Objekt an oder fügt den Header hinzu, falls er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Entfernt einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel-Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}}-Zeichenfolge mit allen Werten eines Headers mit dem angegebenen Namen in einem `Headers`-Objekt zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array mit den Werten aller mit einer Antwort verknüpften {{httpheader("Set-Cookie")}}-Header zurück.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem Sie alle Schlüssel der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt oder fügt den Header hinzu, falls er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, mit dem Sie alle Werte der in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können.

> [!NOTE]
> Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass [`Headers.set()`](/de/docs/Web/API/Headers/set) den vorhandenen Wert durch den neuen Wert ersetzt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert. [`Headers.append()`](/de/docs/Web/API/Headers/append) hängt den neuen Wert dagegen an das Ende der Werteliste an. Codebeispiele finden Sie auf den jeweiligen Seiten.

> [!NOTE]
> Beim Durchlaufen von Header-Werten werden diese automatisch lexikografisch sortiert und Werte von Headern mit demselben Namen zusammengefasst.

## Beschreibung

Ein `Headers`-Objekt verfügt über eine zugehörige Header-Liste, die anfangs leer ist und aus null oder mehr Namen-Wert-Paaren besteht. Mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) können Sie Einträge hinzufügen (siehe [Beispiele](#beispiele)). Bei allen Methoden dieser Schnittstelle werden Header-Namen anhand einer Bytefolge ohne Berücksichtigung der Groß- und Kleinschreibung abgeglichen.

Ein Objekt, das `Headers` implementiert, kann anstelle von [`entries()`](/de/docs/Web/API/Headers/entries) direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden: `for (const p of myHeaders)` ist gleichbedeutend mit `for (const p of myHeaders.entries())`.

### Einschränkungen für Änderungen

Bei manchen `Headers`-Objekten gelten Einschränkungen dafür, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) Header ändern können. Diese Einschränkungen hängen davon ab, wie das `Headers`-Objekt erstellt wurde.

- Für Header, die mit dem Konstruktor [`Headers()`](/de/docs/Web/API/Headers/Headers) erstellt wurden, gelten keine Einschränkungen für Änderungen.
- Für Header von [`Request`](/de/docs/Web/API/Request)-Objekten gilt:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `no-cors` ist, können Sie Namen und Werte von {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} ändern.
  - Andernfalls können Sie Namen und Werte von {{Glossary("forbidden_request_header", "nicht verbotenen Anfrage-Headern")}} ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response)-Objekten gilt:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder durch einen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) empfangen wurde, sind die Header unveränderlich.
  - Wenn die Antwort dagegen mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie Namen und Werte von {{Glossary("forbidden_response_header_name", "nicht verbotenen Antwort-Headern")}} ändern.

Alle `Headers`-Methoden lösen einen {{jsxref("TypeError")}} aus, wenn Sie einen Namen übergeben, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Änderungsoperationen lösen einen `TypeError` aus, wenn der Header unveränderlich ist. In allen anderen Fehlerfällen schlagen sie ohne Fehlermeldung fehl.

## Beispiele

Im folgenden Codeausschnitt erstellen wir mit dem Konstruktor `Headers()` ein neues `Headers`-Objekt, fügen ihm mit `append()` einen neuen Header hinzu und rufen anschließend dessen Wert mit `get()` ab:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Dasselbe lässt sich erreichen, indem dem Konstruktor ein Array von Arrays oder ein Objektliteral übergeben wird:

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
