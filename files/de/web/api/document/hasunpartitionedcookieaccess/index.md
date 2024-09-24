---
title: "Dokument: hasUnpartitionedCookieAccess() Methode"
short-title: hasUnpartitionedCookieAccess()
slug: Web/API/Document/hasUnpartitionedCookieAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`hasUnpartitionedCookieAccess()`** Methode des {{domxref("Document")}} Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf [Drittanbieter-](/de/docs/Web/Privacy/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

Diese Methode ist ein neuer Name für {{DOMxRef("Document.hasStorageAccess()")}}.

## Syntax

```js-nolint
hasUnpartitionedCookieAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat — `true`, falls ja, und `false`, falls nein.

Siehe {{DOMxRef("Document.hasStorageAccess()")}} für weitere Details.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das aktuelle {{domxref("Document")}} noch nicht aktiv ist.

## Beispiele

```js
document.hasUnpartitionedCookieAccess().then((hasAccess) => {
  if (hasAccess) {
    // Der Speicherzugriff wurde bereits gewährt.
    console.log("cookie access granted");
  } else {
    // Der Speicherzugriff wurde noch nicht gewährt;
    // möglicherweise möchten Sie requestStorageAccess() aufrufen.
    console.log("cookie access denied");
  }
});
```

> [!NOTE]
> Sehen Sie sich [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.requestStorageAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
