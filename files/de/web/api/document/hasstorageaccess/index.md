---
title: "Dokument: hasStorageAccess()-Methode"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}

Die **`hasStorageAccess()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich mit einem boolean Wert auflöst, der angibt, ob das Dokument Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies), [nicht partitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Diese Methode ist ein anderer Name für [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess). Es gibt keine aktuellen Pläne, diese Methode zugunsten von [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess) zu entfernen.

## Syntax

```js-nolint
hasStorageAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem boolean Wert auflöst, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat — `true`, wenn dies der Fall ist, und `false`, wenn nicht.

Das von dieser Methode zurückgegebene Ergebnis kann in einigen Fällen ungenau sein:

1. Der Benutzer kann aktive Browsereinstellungen haben, die Drittanbieter-Cookies blockieren; in diesem Fall kann `true` zurückgegeben werden, obwohl Drittanbieter-Cookies weiterhin unzugänglich sind. Um eine solche Situation zu handhaben, sollten Sie mögliche Fehler, die dazu führen, dass Cookie-Werte nicht abrufbar sind, elegant behandeln; informieren Sie den Benutzer beispielsweise, dass der Zugriff auf ihre personalisierten Einstellungen blockiert ist, und laden Sie ihn ein, sich erneut anzumelden, um diese zu nutzen.
2. Der Browser blockiert möglicherweise standardmäßig nicht den Zugriff auf Drittanbieter-Cookies; in diesem Fall kann `false` zurückgegeben werden, obwohl Drittanbieter-Cookies zugänglich sind und ein Speicherzugriff (z.B. über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) nicht angefordert werden müsste. Um dieses Problem zu umgehen, könnten Sie [`Document.cookie`](/de/docs/Web/API/Document/cookie) abfragen, um herauszufinden, ob Ihre Cookies zugänglich sind, und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen, wenn sie es nicht sind.

> [!NOTE]
> Wenn das Promise aufgelöst wird und ein Benutzeraktionsereignis bearbeitet wurde, als die Funktion ursprünglich aufgerufen wurde, wird der Resolve-Handler so ausgeführt, als ob ein Benutzeraktionsereignis bearbeitet wurde. Dadurch kann er APIs aufrufen, die eine Benutzeraktivierung erfordern.

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
> Sehen Sie [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
