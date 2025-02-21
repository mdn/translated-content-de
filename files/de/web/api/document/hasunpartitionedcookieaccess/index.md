---
title: "Dokument: hasUnpartitionedCookieAccess()-Methode"
short-title: hasUnpartitionedCookieAccess()
slug: Web/API/Document/hasUnpartitionedCookieAccess
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("Storage Access API")}}

Die **`hasUnpartitionedCookieAccess()`**-Methode des [`Dokument`](/de/docs/Web/API/Document)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Diese Methode ist ein neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

## Syntax

```js-nolint
hasUnpartitionedCookieAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat — `true`, wenn ja, und `false`, wenn nicht.

Sehen Sie [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) für weitere Details.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Dokument`](/de/docs/Web/API/Document) noch nicht aktiv ist.

## Beispiele

```js
document.hasUnpartitionedCookieAccess().then((hasAccess) => {
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

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess), [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess), [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
