---
title: "Headers: getSetCookie()-Methode"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`getSetCookie()`**-Methode der {{domxref("Headers")}}-Schnittstelle gibt ein Array zurück, das die Werte aller {{httpheader("Set-Cookie")}}-Header enthält, die mit einer Antwort verknüpft sind. Dadurch können {{domxref("Headers")}}-Objekte mehrere `Set-Cookie`-Header behandeln, was vor ihrer Implementierung nicht möglich war.

Diese Methode ist für die Verwendung in Serverumgebungen gedacht (zum Beispiel Node.js). Browser blockieren Frontend-JavaScript-Code daran, auf den {{httpheader("Set-Cookie")}}-Header zuzugreifen, wie es durch die Fetch-Spezifikation vorgeschrieben ist, die `Set-Cookie` als [verbotenen Antwort-Headernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [ausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) aus jeder Antwort, die dem Frontend-Code ausgesetzt ist.

## Syntax

```js-nolint
getSetCookie()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das die Werte aller verschiedenen `Set-Cookie`-Header darstellt, die mit einer Antwort verknüpft sind.

Wenn keine `Set-Cookie`-Header gesetzt sind, gibt die Methode ein leeres Array (`[ ]`) zurück.

## Beispiele

Wie oben angedeutet, wird das Ausführen eines Codes wie des folgenden auf dem Client keine Ergebnisse liefern — `Set-Cookie` wird aus den {{domxref("Headers")}} gefiltert, die über das Netzwerk abgerufen werden.

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // Keine Header-Werte werden zurückgegeben
});
```

Das folgende Beispiel hingegen könnte verwendet werden, um mehrere `Set-Cookie`-Werte abzufragen. Dies ist auf dem Server viel nützlicher, würde aber auch auf dem Client funktionieren.

```js
const headers = new Headers({
  "Set-Cookie": "name1=value1",
});

headers.append("Set-Cookie", "name2=value2");

headers.getSetCookie();
// Gibt zurück ["name1=value1", "name2=value2"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- {{httpheader("Set-Cookie")}}
