---
title: "Headers: getSetCookie() Methode"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

Die **`getSetCookie()`**-Methode der [`Headers`](/de/docs/Web/API/Headers)-Schnittstelle gibt ein Array zurück, das die Werte aller `Set-Cookie`-Header enthält, die mit einer Antwort verknüpft sind. Dadurch können [`Headers`](/de/docs/Web/API/Headers)-Objekte mit mehreren `Set-Cookie`-Headern umgehen, was vor der Implementierung dieser Methode nicht möglich war.

Diese Methode ist für die Verwendung in Serverumgebungen (zum Beispiel Node.js) gedacht. Browser blockieren JavaScript-Code im Frontend daran, auf den {{httpheader("Set-Cookie")}}-Header zuzugreifen, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort, die dem Frontend-Code ausgesetzt ist, herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0).

## Syntax

```js-nolint
getSetCookie()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das die Werte aller verschiedenen `Set-Cookie`-Header enthält, die mit einer Antwort verknüpft sind.

Falls keine `Set-Cookie`-Header gesetzt sind, gibt die Methode ein leeres Array (`[ ]`) zurück.

## Beispiele

Wie bereits oben angedeutet, wird das Ausführen von Code wie dem folgenden auf dem Client keine Ergebnisse zurückgeben – `Set-Cookie` wird aus den über das Netzwerk abgerufenen [`Headers`](/de/docs/Web/API/Headers) herausgefiltert.

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // No header values returned
});
```

Jedoch könnte Folgendes verwendet werden, um mehrere `Set-Cookie`-Werte abzufragen. Dies ist auf dem Server viel nützlicher, würde aber auch auf dem Client funktionieren.

```js
const headers = new Headers({
  "Set-Cookie": "name1=value1",
});

headers.append("Set-Cookie", "name2=value2");

headers.getSetCookie();
// Returns ["name1=value1", "name2=value2"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- {{httpheader("Set-Cookie")}}
