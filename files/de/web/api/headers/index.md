---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Das **`Headers`**-Interface der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, verschiedene Aktionen auf [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen zu und Entfernen von Headern aus der Liste der Anfrage-Header.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und ein neues `Headers`-Objekt mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellen.

> [!NOTE]
> Mehr über die verfügbaren Header erfahren Sie in unserem [HTTP-Header](/de/docs/Web/HTTP/Headers) Referenz.

## Beschreibung

Ein `Headers`-Objekt hat eine zugehörige Header-Liste, die anfänglich leer ist und aus null oder mehr Namens-Wert-Paaren besteht. Sie können diese mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) ergänzen (siehe [Beispiele](#beispiele)). In allen Methoden dieses Interfaces werden Header-Namen anhand einer groß-/kleinschreibungsunabhängigen Bytefolge abgeglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstelle von [`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)` ist gleichbedeutend mit `for (const p of myHeaders.entries())`.

### Einschränkungen bei der Modifikation

Einige `Headers`-Objekte haben Einschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Modifikationseinschränkungen sind je nach Erstellung des `Headers`-Objekts festgelegt.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers)-Konstruktor erstellt wurden, gibt es keine Einschränkungen bei der Modifikation.
- Für Header von [`Request`](/de/docs/Web/API/Request)-Objekten:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `no-cors` ist, können Sie jeden {{Glossary("CORS-safelisted_request_header", "CORS-freigegebenen Anfrage-Header")}} Namen/Wert ändern.
  - Andernfalls können Sie jeden {{Glossary("forbidden_header_name", "nicht verbotenen Header")}} Namen/Wert ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response)-Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt wird, oder von einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf empfangen wird, sind die Header unveränderlich und können nicht geändert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wird, können Sie jeden {{Glossary("forbidden_response_header_name", "nicht verbotenen Antwort-Header")}} Namen/Wert ändern.

Alle Header-Methoden werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, eine Referenz auf einen Namen zu übergeben, der kein [gültiger HTTP-Headername](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Mutationsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In jedem anderen Fehlerfall schlagen sie unauffällig fehl.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Fügt einen neuen Wert einem vorhandenen Header innerhalb eines `Headers`-Objekts hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, der das Durchlaufen aller Schlüssel-/Wertpaare in diesem Objekt ermöglicht.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel-/Wertpaar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}}-Sequenz aller Werte eines Headers in einem `Headers`-Objekt mit einem bestimmten Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array mit den Werten aller mit einer Antwort verbundenen {{httpheader("Set-Cookie")}} Header zurück.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der Ihnen ermöglicht, alle Schlüssel der in diesem Objekt enthaltenen Schlüssel-/Wertpaare zu durchlaufen.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen vorhandenen Header innerhalb eines `Headers`-Objekts oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der Ihnen ermöglicht, alle Werte der in diesem Objekt enthaltenen Schlüssel-/Wertpaare zu durchlaufen.

> [!NOTE]
> Um klar zu sein: Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, [`Headers.set()`](/de/docs/Web/API/Headers/set) den existierenden Wert mit dem neuen überschreibt, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert am Ende der Wertemenge anfügt. Siehe deren dedizierte Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte iteriert werden, werden sie automatisch in lexikografischer Reihenfolge sortiert und Werte von doppelten Header-Namen werden kombiniert.

## Beispiele

Im folgenden Beispiel erstellen wir einen neuen Header mit dem `Headers()`-Konstruktor, fügen ihm mit `append()` einen neuen Header hinzu und geben dann diesen Header-Wert mit `get()` zurück:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Das gleiche kann erreicht werden, indem ein Array von Arrays oder ein Objektliteral an den Konstruktor übergeben wird:

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
