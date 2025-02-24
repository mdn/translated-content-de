---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Das **`Headers`** Interface der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, verschiedene Aktionen mit [HTTP-Anforderungs- und Antwortheadern](/de/docs/Web/HTTP/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen zu und Entfernen von Headern aus der Liste der Header der Anfrage.

Ein `Headers`-Objekt kann über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abgerufen und ein neues `Headers`-Objekt mit dem Konstruktor [`Headers()`](/de/docs/Web/API/Headers/Headers) erstellt werden. Im Vergleich zur Verwendung von einfachen Objekten bietet die Nutzung von `Headers`-Objekten zur Sendung von Anfragen eine zusätzliche Eingabesanitierung. Zum Beispiel normalisiert es Headernamen auf Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen von Headerwerten und verhindert das Setzen bestimmter Header.

> [!NOTE]
> Weitere Informationen über die verfügbaren Header finden Sie in unserem [HTTP Headers](/de/docs/Web/HTTP/Headers) Referenzdokument.

## Beschreibung

Ein `Headers`-Objekt hat eine zugeordnete Header-Liste, die anfangs leer ist und aus null oder mehr Namens- und Wertpaaren besteht. Sie können diese Liste mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) erweitern (siehe [Beispiele](#beispiele)). In allen Methoden dieses Interfaces werden Headernamen durch eine groß-/kleinschreibungunempfindliche Bytesequenz abgeglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstelle von [`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)` entspricht `for (const p of myHeaders.entries())`.

### Änderungsbeschränkungen

Einige `Headers`-Objekte haben Beschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Änderungsbeschränkungen hängen davon ab, wie das `Headers`-Objekt erstellt wird.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellt wurden, gibt es keine Änderungsbeschränkungen.
- Für Header von [`Request`](/de/docs/Web/API/Request) Objekten:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `no-cors` ist, können Sie jeden {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}} Name/Wert ändern.
  - Andernfalls können Sie jeden {{Glossary("forbidden_request_header", "nicht verbotenen request header")}} Name/Wert ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response) Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder von einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf empfangen wurde, sind die Header unveränderlich und können nicht geändert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie jeden {{Glossary("forbidden_response_header_name", "nicht verbotenen response header")}} Name/Wert ändern.

Alle Methoden von Headers werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, eine Referenz zu einem Namen zu übergeben, der kein [gültiger HTTP-Headername](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Mutationsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In jedem anderen Fehlerfall schlagen sie leise fehl.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Hängt einen neuen Wert an einen bestehenden Header innerhalb eines `Headers`-Objekts an oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, durch alle Schlüssel/Wert-Paare in diesem Objekt zu gehen.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}} Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem gegebenen Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}} Header enthält, die mit einer Antwort verknüpft sind.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen Boolean zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, durch alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt zu gehen.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen bestehenden Header innerhalb eines `Headers`-Objekts oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, durch alle Werte der Schlüssel/Wert-Paare in diesem Objekt zu gehen.

> [!NOTE]
> Um klarzustellen: Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass, wenn der spezifizierte Header bereits existiert und mehrere Werte akzeptiert, [`Headers.set()`](/de/docs/Web/API/Headers/set) den vorhandenen Wert mit dem neuen überschreibt, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert an das Ende der Wertmenge anhängt. Siehe ihre jeweiligen Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte über Iterationen durchlaufen werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte von doppelten Headernamen werden kombiniert.

## Beispiele

Im folgenden Beispiel erstellen wir einen neuen Header mit dem `Headers()` Konstruktor, fügen einen neuen Header mit `append()` hinzu und geben dann diesen Headerwert mit `get()` zurück:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Dasselbe kann erreicht werden, indem ein Array von Arrays oder ein Objektliteral an den Konstruktor übergeben wird:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
