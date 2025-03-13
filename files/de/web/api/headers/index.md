---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Das **`Headers`** Interface der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht Ihnen, verschiedene Aktionen auf [HTTP-Anfrage- und -Antwort-Header](/de/docs/Web/HTTP/Reference/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen und Entfernen von Headern aus der Liste der Anfrage-Header.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und ein neues `Headers`-Objekt mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellen. Im Vergleich zur Verwendung von einfachen Objekten bietet die Verwendung von `Headers`-Objekten beim Senden von Anfragen eine zusätzliche Eingabesäuberung. Zum Beispiel normalisiert es die Header-Namen auf Kleinbuchstaben, entfernt führende und nachfolgende Leerzeichen aus Header-Werten und verhindert das Setzen bestimmter Header.

> [!NOTE]
> Weitere Informationen über die verfügbaren Header finden Sie in unserem [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) Referenzdokument.

## Beschreibung

Ein `Headers`-Objekt hat eine zugeordnete Header-Liste, die anfänglich leer ist und aus null oder mehr Name-Wert-Paaren besteht. Sie können diese mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) erweitern (siehe [Beispiele](#beispiele).) In allen Methoden dieses Interfaces werden Header-Namen durch eine nicht-groß-/kleinschreibungssensitive Byte-Sequenz abgeglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstatt [`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)` ist äquivalent zu `for (const p of myHeaders.entries())`.

### Einschränkungen bei der Modifikation

Einige `Headers`-Objekte unterliegen Einschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Einschränkungen für die Modifikation werden je nach Art und Weise, wie das `Headers`-Objekt erstellt wurde, festgelegt.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellt wurden, gibt es keine Modifikationsbeschränkungen.
- Für Header von [`Request`](/de/docs/Web/API/Request) Objekten:
  - Wenn der `mode` der Anfrage auf `no-cors` gesetzt ist, kann jeder {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelistete Anfrage-Header")}} Name/Wert modifiziert werden.
  - Andernfalls kann jeder {{Glossary("forbidden_request_header", "nicht verbotene Anfrage-Header")}} Name/Wert modifiziert werden.
- Für Header von [`Response`](/de/docs/Web/API/Response) Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder von einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf empfangen wird, sind die Header unveränderlich und können nicht modifiziert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie jeden {{Glossary("forbidden_response_header_name", "nicht verbotenen Antwort-Header")}} Name/Wert modifizieren.

Alle Methoden des Headers werfen eine {{jsxref("TypeError")}}, wenn Sie versuchen, eine Referenz auf einen Namen zu übergeben, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Mutationsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In allen anderen Fehlerfällen schlagen sie stillschweigend fehl.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Fügt einen neuen Wert zu einem existierenden Header in einem `Headers`-Objekt hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der das Durchlaufen aller in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}} Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem angegebenen Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}} Header enthält, die mit einer Antwort verknüpft sind.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der das Durchlaufen aller Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen existierenden Header in einem `Headers`-Objekt oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der das Durchlaufen aller Werte der in diesem Objekt enthaltenen Schlüssel/Wert-Paare ermöglicht.

> [!NOTE]
> Um klarzustellen: Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, [`Headers.set()`](/de/docs/Web/API/Headers/set) den vorhandenen Wert mit dem neuen überschreibt, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert an das Ende der Wertemenge anhängt. Siehe deren spezielle Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte durchlaufen werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte von duplizierten Header-Namen werden kombiniert.

## Beispiele

Im folgenden Beispiel erstellen wir einen neuen Header mit dem `Headers()` Konstruktor, fügen mit `append()` einen neuen Header hinzu und rufen dann diesen Header-Wert mit `get()` ab:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Dasselbe kann erreicht werden, indem ein Array von Arrays oder ein Objekt-Literal an den Konstruktor übergeben wird:

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
