---
title: Header
slug: Web/API/Headers
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`Headers`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) ermöglicht Ihnen verschiedene Aktionen auf [HTTP-Anfrage- und Antwort-Headern](/de/docs/Web/HTTP/Headers) auszuführen. Diese Aktionen umfassen das Abrufen, Setzen, Hinzufügen und Entfernen von Headern aus der Liste der Anfrage-Header.

Sie können ein `Headers`-Objekt über die Eigenschaften {{domxref("Request.headers")}} und {{domxref("Response.headers")}} abrufen und ein neues `Headers`-Objekt mit dem {{domxref("Headers.Headers", "Headers()")}} Konstruktor erstellen.

> [!NOTE]
> Sie können mehr über die verfügbaren Header in unserem [HTTP-Header](/de/docs/Web/HTTP/Headers) Referenzdokument erfahren.

## Beschreibung

Ein `Headers`-Objekt hat eine zugehörige Header-Liste, die anfangs leer ist und aus null oder mehr Name-Wert-Paaren besteht. Sie können diese Liste mit Methoden wie {{domxref("Headers.append","append()")}} erweitern (siehe [Beispiele](#beispiele)). In allen Methoden dieser Schnittstelle werden Header-Namen anhand von nicht fallunterscheidenden Byte-Sequenzen verglichen.

Ein Objekt, das `Headers` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstelle von {{domxref('Headers.entries()', 'entries()')}}: `for (const p of myHeaders)` ist äquivalent zu `for (const p of myHeaders.entries())`.

### Änderungsbeschränkungen

Einige `Headers`-Objekte haben Einschränkungen hinsichtlich der Möglichkeit, ob die Methoden {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, und {{domxref("Headers.append","append()")}} den Header verändern können. Die Änderungsbeschränkungen werden festgelegt, je nachdem, wie das `Headers`-Objekt erstellt wurde.

- Für Header, die mit dem {{domxref("Headers.Headers","Headers()")}} Konstruktor erstellt wurden, gibt es keine Änderungsbeschränkungen.
- Für Header von {{domxref("Request")}}-Objekten:
  - Wenn der {{domxref("Request.mode","mode")}} der Anfrage `no-cors` ist, können Sie jeden {{Glossary("CORS-safelisted request header")}} Namen/Wert ändern.
  - Andernfalls können Sie jeden {{Glossary("forbidden header name", "non-forbidden header")}} Namen/Wert ändern.
- Für Header von {{domxref("Response")}}-Objekten:
  - Wenn die Antwort mit {{domxref("Response.error_static", "Response.error()")}} oder {{domxref("Response.redirect_static", "Response.redirect()")}} erstellt oder von einem {{domxref("Window/fetch", "fetch()")}}-Aufruf empfangen wurde, sind die Header unveränderlich und können nicht geändert werden.
  - Andernfalls, wenn die Antwort mit {{domxref("Response.Response","Response()")}} oder {{domxref("Response.json_static","Response.json()")}} erstellt wurde, können Sie jeden {{Glossary("forbidden response header name", "non-forbidden response header")}} Namen/Wert ändern.

Alle Methoden der Headers-Schnittstelle werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, einen Verweis auf einen Namen zu verwenden, der kein [gültiger HTTP-Header-Name](https://fetch.spec.whatwg.org/#concept-header-name) ist. Die Mutationsoperationen werfen einen `TypeError`, wenn der Header unveränderlich ist. Bei jedem anderen Fehlerfall schlagen sie stillschweigend fehl.

## Konstruktor

- {{domxref("Headers.Headers()", "Headers()")}}
  - : Erstellt ein neues `Headers`-Objekt.

## Instanzmethoden

- {{domxref("Headers.append()")}}
  - : Fügt einem bestehenden Header in einem `Headers`-Objekt einen neuen Wert hinzu oder fügt den Header hinzu, wenn er noch nicht existiert.
- {{domxref("Headers.delete()")}}
  - : Löscht einen Header aus einem `Headers`-Objekt.
- {{domxref("Headers.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen.
- {{domxref("Headers.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Schlüssel/Wert-Paar in diesem `Headers`-Objekt aus.
- {{domxref("Headers.get()")}}
  - : Gibt eine {{jsxref("String")}}-Sequenz aller Werte eines Headers innerhalb eines `Headers`-Objekts mit einem gegebenen Namen zurück.
- {{domxref("Headers.getSetCookie()")}}
  - : Gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}}-Header enthält, die mit einer Antwort verknüpft sind.
- {{domxref("Headers.has()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob ein `Headers`-Objekt einen bestimmten Header enthält.
- {{domxref("Headers.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, alle Schlüssel der in diesem Objekt enthaltenen Schlüssel/Wert-Paare zu durchlaufen.
- {{domxref("Headers.set()")}}
  - : Setzt einen neuen Wert für einen bestehenden Header in einem `Headers`-Objekt oder fügt den Header hinzu, wenn er noch nicht existiert.
- {{domxref("Headers.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, alle Werte der in diesem Objekt enthaltenen Schlüssel/Wert-Paare zu durchlaufen.

> [!NOTE]
> Um es klarzustellen: der Unterschied zwischen {{domxref("Headers.set()")}} und {{domxref("Headers.append()")}} besteht darin, dass {{domxref("Headers.set()")}} den bestehenden Wert mit dem neuen Wert überschreibt, wenn der angegebene Header bereits existiert und mehrere Werte akzeptiert. Dagegen hängt {{domxref("Headers.append()")}} den neuen Wert am Ende der bestehenden Werteliste an. Siehe deren eigene Seiten für Beispielcode.

> [!NOTE]
> Wenn Header-Werte durchlaufen werden, werden sie automatisch in lexikografischer Reihenfolge sortiert und Werte von doppelten Header-Namen kombiniert.

## Beispiele

Im folgenden Code-Snippet erstellen wir einen neuen Header mit dem `Headers()`-Konstruktor, fügen einen neuen Header mit `append()` hinzu und geben dann diesen Header-Wert mit `get()` zurück:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

Dasselbe kann erreicht werden, indem man ein Array von Arrays oder ein Objektliteral an den Konstruktor übergibt:

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// oder, unter Verwendung eines Arrays von Arrays:
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // should return 'text/xml'
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
