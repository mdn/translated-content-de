---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: bd4e1b05874f321d54d1211493d7f5dbec7d8c9a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht es Ihnen, verschiedene Aktionen an [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Headers) durchzuführen. Diese Aktionen umfassen das Abrufen, Festlegen, Hinzufügen und Entfernen von Headern aus der Liste der Header einer Anfrage.

Sie können ein `Headers`-Objekt über die Eigenschaften [`Request.headers`](/de/docs/Web/API/Request/headers) und [`Response.headers`](/de/docs/Web/API/Response/headers) abrufen und ein neues `Headers`-Objekt mithilfe des [`Headers()`](/de/docs/Web/API/Headers/Headers)-Konstruktors erstellen. Im Vergleich zur Verwendung einfacher Objekte bietet die Verwendung von `Headers`-Objekten beim Senden von Anfragen zusätzliche Eingabesicherheitsmechanismen. Zum Beispiel werden Headernamen in Kleinbuchstaben umgewandelt, führende und nachfolgende Leerzeichen aus Headerwerten entfernt, und bestimmte Header können nicht gesetzt werden.

> [!NOTE]
> Sie können mehr über die verfügbaren Header erfahren, indem Sie unsere Referenz zu [HTTP-Headern](/de/docs/Web/HTTP/Headers) lesen.

## Beschreibung

Ein `Headers`-Objekt verfügt über eine zugeordnete Header-Liste, die anfangs leer ist und aus null oder mehr Namens- und Wertpaaren besteht. Sie können diese Liste mithilfe von Methoden wie [`append()`](/de/docs/Web/API/Headers/append) ergänzen (siehe [Beispiele](#beispiele)). In allen Methoden dieser Schnittstelle werden Headernamen anhand von groß-/kleinbuchstabenunabhängigen Bytefolgen abgeglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}}-Struktur verwendet werden, anstelle von [`entries()`](/de/docs/Web/API/Headers/entries): `for (const p of myHeaders)` ist gleichbedeutend mit `for (const p of myHeaders.entries())`.

### Einschränkungen bei Änderungen

Einige `Headers`-Objekte unterliegen Einschränkungen, ob die Methoden [`set()`](/de/docs/Web/API/Headers/set), [`delete()`](/de/docs/Web/API/Headers/delete) und [`append()`](/de/docs/Web/API/Headers/append) den Header ändern können. Die Änderungsbeschränkungen hängen davon ab, wie das `Headers`-Objekt erstellt wurde.

- Für Header, die mit dem [`Headers()`](/de/docs/Web/API/Headers/Headers)-Konstruktor erstellt wurden, gibt es keine Änderungsbeschränkungen.
- Für Header von [`Request`](/de/docs/Web/API/Request)-Objekten:
  - Wenn der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage `no-cors` ist, können Sie jeden {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteten Anfragen-Header")}} ändern.
  - Andernfalls können Sie jeden {{Glossary("forbidden_header_name", "nicht verbotenen Header")}} ändern.
- Für Header von [`Response`](/de/docs/Web/API/Response)-Objekten:
  - Wenn die Antwort mit [`Response.error()`](/de/docs/Web/API/Response/error_static) oder [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) erstellt oder durch einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf erhalten wurde, sind die Header unveränderlich und können nicht geändert werden.
  - Andernfalls, wenn die Antwort mit [`Response()`](/de/docs/Web/API/Response/Response) oder [`Response.json()`](/de/docs/Web/API/Response/json_static) erstellt wurde, können Sie jeden {{Glossary("forbidden_response_header_name", "nicht verbotenen Antwort-Header")}} ändern.

Alle Methoden der `Headers`-Schnittstelle werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, einen Namen zu übergeben, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Änderungsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. In allen anderen Fehlerfällen schlagen sie stillschweigend fehl.

## Konstruktor

- [`Headers()`](/de/docs/Web/API/Headers/Headers)
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- [`Headers.append()`](/de/docs/Web/API/Headers/append)
  - : Fügt einem vorhandenen Header in einem `Headers`-Objekt einen neuen Wert hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.delete()`](/de/docs/Web/API/Headers/delete)
  - : Löscht einen Header aus einem `Headers`-Objekt.
- [`Headers.entries()`](/de/docs/Web/API/Headers/entries)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, mit dem Sie alle Schlüssel/Wert-Paare in diesem Objekt durchgehen können.
- [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- [`Headers.get()`](/de/docs/Web/API/Headers/get)
  - : Gibt eine {{jsxref("String")}}-Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit dem angegebenen Namen zurück.
- [`Headers.getSetCookie()`](/de/docs/Web/API/Headers/getSetCookie)
  - : Gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}}-Header enthält, die mit einer Antwort verknüpft sind.
- [`Headers.has()`](/de/docs/Web/API/Headers/has)
  - : Gibt einen Boolean zurück, der angibt, ob ein bestimmter Header in einem `Headers`-Objekt enthalten ist.
- [`Headers.keys()`](/de/docs/Web/API/Headers/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, mit dem Sie alle Schlüssel der Schlüssel/Wert-Paare in diesem Objekt durchgehen können.
- [`Headers.set()`](/de/docs/Web/API/Headers/set)
  - : Setzt einen neuen Wert für einen vorhandenen Header in einem `Headers`-Objekt oder fügt den Header hinzu, wenn er noch nicht existiert.
- [`Headers.values()`](/de/docs/Web/API/Headers/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, mit dem Sie alle Werte der Schlüssel/Wert-Paare in diesem Objekt durchgehen können.

> [!NOTE]
> Um klarzustellen: Der Unterschied zwischen [`Headers.set()`](/de/docs/Web/API/Headers/set) und [`Headers.append()`](/de/docs/Web/API/Headers/append) besteht darin, dass [`Headers.set()`](/de/docs/Web/API/Headers/set) einen vorhandenen Wert mit dem neuen überschreibt, falls der angegebene Header bereits existiert und mehrere Werte akzeptiert, während [`Headers.append()`](/de/docs/Web/API/Headers/append) den neuen Wert an das Ende der Werteliste anhängt. Siehe ihre jeweiligen Seiten für Beispielcode.

> [!NOTE]
> Beim Iterieren über Headerwerte werden diese automatisch in lexikographischer Reihenfolge sortiert, und Werte von gleichen Headernamen werden kombiniert.

## Beispiele

Im folgenden Snippet erstellen wir einen neuen Header mit dem `Headers()`-Konstruktor, fügen mit `append()` einen neuen Header hinzu und geben diesen Headerwert mit `get()` zurück:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
