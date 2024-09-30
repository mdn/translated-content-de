---
title: "Document: hasStorageAccess()-Methode"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`hasStorageAccess()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf [Third-Party-](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Diese Methode ist ein anderer Name für [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess). Derzeit gibt es keine Pläne, diese Methode zugunsten von [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess) zu entfernen.

## Syntax

```js-nolint
hasStorageAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Third-Party-Cookies hat — `true`, wenn es dies tut, und `false`, wenn nicht.

Das von dieser Methode zurückgegebene Ergebnis kann in einigen Fällen ungenau sein:

1. Der Benutzer hat möglicherweise aktive Browsereinstellungen, die Third-Party-Cookies blockieren; in diesem Fall kann `true` zurückgegeben werden, obwohl Third-Party-Cookies weiterhin unzugänglich sind. Um eine solche Situation zu bewältigen, sollten Sie mögliche Fehler in der Art abfangen, dass Cookie-Werte nicht abgerufen werden können; informieren Sie beispielsweise den Nutzer, dass der Zugriff auf die personalisierten Einstellungen blockiert ist, und laden Sie ihn ein, sich erneut anzumelden, um sie zu nutzen.
2. Der Browser blockiert möglicherweise standardmäßig keinen Zugriff auf Third-Party-Cookies; in diesem Fall kann `false` zurückgegeben werden, obwohl Third-Party-Cookies zugänglich sind und ein Speicherzugriff nicht angefordert werden muss (d.h. über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)). Um dieses Problem zu umgehen, könnten Sie [`Document.cookie`](/de/docs/Web/API/Document/cookie) abfragen, um herauszufinden, ob Ihre Cookies zugänglich sind, und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen, wenn dies nicht der Fall ist.

> [!NOTE]
> Wenn das Promise aufgelöst wird und ein Benutzeraktionsevent bearbeitet wird, wenn die Funktion ursprünglich aufgerufen wurde, wird der Resolve-Handler so ausgeführt, als ob ein Benutzeraktionsevent verarbeitet wird. Somit können APIs aufgerufen werden, die eine Benutzeraktivierung erfordern.

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
> Siehe [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
