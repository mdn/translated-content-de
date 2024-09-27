---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers`** Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht Ihnen verschiedene Aktionen an [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen und Entfernen von Headern aus der Liste der Header der Anfrage.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und ein neues `Headers`-Objekt mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellen.

> [!NOTE]
> Weitere Informationen zu den verfügbaren Headern finden Sie in unserem [HTTP headers](/de/docs/Web/HTTP/Headers) Referenz.

## Beschreibung

Ein `Headers`-Objekt hat eine zugehörige Liste von Headern, die anfänglich leer ist und aus null oder mehr Namen- und Werte-Paaren besteht. Sie können diese mit Methoden wie [`append()`](/de/docs/Web/API/Headers/append) erweitern (siehe [Beispiele](#beispiele)). In allen Methoden dieser Schnittstelle werden Headernamen durch fallunabhängige Bytesequenzen verglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstatt [`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)` ist äquivalent zu `for (const p of myHeaders.entries())`.

### Änderungsbeschränkungen

Einige `Headers`-Objekte haben Einschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Änderungsbeschränkungen werden abhängig davon festgelegt, wie das `Headers`-Objekt erstellt wurde.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers) Konstruktor erstellt wurden, gibt es keine Änderungsbeschränkungen.
- Für Header von [`Request`](/de/docs/Web/API/Request) Objekten:
  - Wenn der `mode` der Anfrage `no-cors` ist, können Sie jeden [CORS-safelisteten Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header) Namen/Wert ändern.
  - Andernfalls können Sie jeden [nicht verbotenen Header](/de/docs/Glossary/forbidden_header_name) Namen/Wert ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response) Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt wurde oder aus einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf resultiert, sind die Header unveränderlich und können nicht geändert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie jeden [nicht verbotenen Antwort-Header](/de/docs/Glossary/forbidden_response_header_name) Namen/Wert ändern.

Alle Methoden der Headers werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, einen Verweis auf einen Namen zu übergeben, der kein [gültiger HTTP-Headername](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Änderungsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In allen anderen Fehlerfällen schlagen sie stillschweigend fehl.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Fügt einen neuen Wert zu einem bestehenden Header in einem `Headers`-Objekt hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt durchzulaufen.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}} Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem bestimmten Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}} Header enthält, die mit einer Antwort verknüpft sind.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der es Ihnen ermöglicht, alle Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare durchzulaufen.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen bestehenden Header in einem `Headers`-Objekt oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der es Ihnen ermöglicht, alle Werte der Schlüssel/Wert-Paare in diesem Objekt durchzulaufen.

> [!NOTE]
> Um klar zu sein, der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert, [`Headers.set()`](/de/docs/Web/API/Headers/set) den bestehenden Wert mit dem neuen überschreibt, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert an das Ende der Wertemenge anhängt. Siehe ihre dedizierten Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte durchlaufen werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte von doppelten Headernamen werden kombiniert.

## Beispiele

Im folgenden Ausschnitt erstellen wir einen neuen Header mit dem `Headers()` Konstruktor, fügen einen neuen Header mit `append()` hinzu und geben dann diesen Headerwert mit `get()` zurück:

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
- [HTTP Zugangskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
