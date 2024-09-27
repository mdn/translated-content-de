---
title: "Document: hasStorageAccess() Methode"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`hasStorageAccess()`** Methode des [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der anzeigt, ob das Dokument Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Diese Methode ist ein anderer Name für [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess). Es gibt derzeit keine Pläne, diese Methode zugunsten von [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess) zu entfernen.

## Syntax

```js-nolint
hasStorageAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird, der anzeigt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat — `true`, wenn ja, und `false`, wenn nicht.

Das von dieser Methode zurückgegebene Ergebnis kann unter bestimmten Umständen ungenau sein:

1. Der Benutzer kann aktive Browsereinstellungen haben, die Drittanbieter-Cookies blockieren; in diesem Fall kann `true` zurückgegeben werden, obwohl Drittanbieter-Cookies weiterhin nicht zugänglich sind. Um mit einer solchen Situation umzugehen, sollten Sie alle Fehler, die dazu führen, dass Cookie-Werte nicht abgerufen werden können, elegant handhaben; informieren Sie beispielsweise den Benutzer, dass der Zugriff auf seine personalisierten Einstellungen blockiert ist und laden Sie ihn ein, sich erneut anzumelden, um sie zu nutzen.
2. Der Browser könnte den Zugriff auf Drittanbieter-Cookies standardmäßig nicht blockieren; in diesem Fall kann `false` zurückgegeben werden, obwohl Drittanbieter-Cookies zugänglich sind, und ein Zugriff auf den Speicher nicht angefordert werden müsste (d.h. über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)). Um dieses Problem zu umgehen, könnten Sie [`Document.cookie`](/de/docs/Web/API/Document/cookie) abfragen, um herauszufinden, ob Ihre Cookies zugänglich sind, und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen, wenn sie nicht zugänglich sind.

> [!NOTE]
> Wenn das Promise aufgelöst wird und ein Benutzerinteraktionsereignis bearbeitet wurde, als die Funktion ursprünglich aufgerufen wurde, wird der Auflösungshandler ausgeführt, als ob eine Benutzerinteraktion verarbeitet würde, sodass es APIs aufrufen kann, die eine Benutzeraktivierung erfordern.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.

## Beispiele

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // storage access has been granted already.
    console.log("cookie access granted");
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
    console.log("cookie access denied");
  }
});
```

> [!NOTE]
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
