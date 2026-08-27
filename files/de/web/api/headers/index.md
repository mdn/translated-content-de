---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Das **`Headers`**-Interface der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht Ihnen verschiedene Aktionen auf [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Reference/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen zu und Entfernen von Headern aus der Liste der Header der Anfrage.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und ein neues `Headers`-Objekt mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers)-Konstruktor erstellen. Im Vergleich zur Verwendung von einfachen Objekten bietet die Verwendung von `Headers`-Objekten für das Senden von Anfragen zusätzliche Eingabesäuberung. Zum Beispiel normalisiert es die Header-Namen in Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen von Header-Werten und verhindert, dass bestimmte Header gesetzt werden.

> [!NOTE]
> Mehr über die verfügbaren Header erfahren Sie in unserem [Referenzdokument zu HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers).

## Beschreibung

Ein `Headers`-Objekt verfügt über eine zugehörige Header-Liste, die zunächst leer ist und aus null oder mehr Paaren von Namen und Werten besteht. Sie können dies mithilfe von Methoden wie [`append()`](/de/docs/Web/API/Headers/append) hinzufügen (siehe [Beispiele](#beispiele)). In allen Methoden dieses Interfaces werden Header-Namen durch eine nicht case-sensitive Byte-Sequenz abgeglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden, anstatt `[`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)`ist äquivalent zu`for (const p of myHeaders.entries())`.

### Einschränkungen bei Änderungen

Einige `Headers`-Objekte haben Einschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Änderungsbeschränkungen hängen davon ab, wie das `Headers`-Objekt erstellt wurde.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers)-Konstruktor erstellt wurden, gibt es keine Änderungsbeschränkungen.
- Für Header von [`Request`](/de/docs/Web/API/Request)-Objekten:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `no-cors` ist, können Sie jeden {{Glossary("CORS-safelisted_request_header", "CORS-Whitelist-Anfrage-Header")}} Namen/Wert ändern.
  - Andernfalls können Sie jeden {{Glossary("forbidden_request_header", "nicht verbotenen Anfrage-Header")}} Namen/Wert ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response)-Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder von einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf empfangen wird, sind die Header unveränderlich und können nicht modifiziert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wird, können Sie jeden {{Glossary("forbidden_response_header_name", "nicht verbotenen Antwort-Header")}} Namen/Wert ändern.

Alle Methoden von Headers werfen einen {{jsxref("TypeError")}}, wenn versucht wird, eine Referenz auf einen Namen zu übergeben, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Änderungsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In jedem anderen Fehlerfall scheitern sie stillschweigend.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Fügt einen neuen Wert zu einem vorhandenen Header in einem `Headers`-Objekt hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel/Werte durchgehen können.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}}-Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem gegebenen Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array zurück, das die Werte aller mit einer Antwort verknüpften {{httpheader("Set-Cookie")}}-Header enthält.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem Sie alle Schlüssel der darin enthaltenen Schlüssel/Werte durchgehen können.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, mit dem Sie alle Werte der darin enthaltenen Schlüssel/Werte durchgehen können.

> [!NOTE]
> Um klarzustellen: Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, [`Headers.set()`](/de/docs/Web/API/Headers/set) den bestehenden Wert durch den neuen überschreibt, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert am Ende der Wertemenge anhängt. Siehe deren spezielle Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte durchlaufen werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte von doppelten Header-Namen werden kombiniert.

## Beispiele

Im folgenden Ausschnitt erstellen wir einen neuen Header mit dem `Headers()`-Konstruktor, fügen mit `append()` einen neuen Header hinzu und geben dann den Header-Wert mit `get()` zurück:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Das Gleiche kann erreicht werden, indem ein Array von Arrays oder ein Objektliteral an den Konstruktor übergeben wird:

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
