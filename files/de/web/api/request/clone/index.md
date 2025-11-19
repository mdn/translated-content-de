---
title: "Anfrage: clone()-Methode"
short-title: clone()
slug: Web/API/Request/clone
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`clone()`**-Methode des [`Request`](/de/docs/Web/API/Request)-Interfaces erstellt eine Kopie des aktuellen `Request`-Objekts.

Ähnlich der zugrunde liegenden [`ReadableStream.tee`](/de/docs/Web/API/ReadableStream/tee)-API,
wird das [`body`](/de/docs/Web/API/Request/body) eines geklonten `Request`
den Rückstaudruck mit der Geschwindigkeit des _schnelleren_ Verbrauchers der beiden Bodies signalisieren,
und nicht gelesene Daten werden intern in dem langsamer konsumierten `body` eingereiht,
ohne Limit oder Rückstaudruck.
Vorsicht ist geboten, wenn Sie einen `Request` aus einem Stream konstruieren und dann `clone` darauf anwenden.

`clone()` wirft einen {{jsxref("TypeError")}}, wenn der Anforderungskörper bereits verwendet wurde. Tatsächlich existiert `clone()` hauptsächlich, um die mehrfache Verwendung von Köperobjekten zu erlauben (wenn sie nur einmal verwendet werden können).

Falls Sie vorhaben, die Anfrage zu ändern, ziehen Sie eventuell den [`Request`](/de/docs/Web/API/Request)-Konstruktor vor.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das eine exakte Kopie des `Request` ist, auf dem `clone()` aufgerufen wurde.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie das Skript) und klonen dann die Anfrage.

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
