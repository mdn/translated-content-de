---
title: "Dokument: hasStorageAccess() Methode"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Storage Access API")}}

Die **`hasStorageAccess()`** Methode der {{domxref("Document")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird und anzeigt, ob das Dokument Zugriff auf [Third-Party](/de/docs/Web/Privacy/Third-party_cookies), [unpartitionierte](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Cookies hat.

Diese Methode ist Teil der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Diese Methode ist ein anderer Name für {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}. Es gibt derzeit keine Pläne, diese Methode zugunsten von {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}} zu entfernen.

## Syntax

```js-nolint
hasStorageAccess()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird und anzeigt, ob das Dokument Zugriff auf Third-Party-Cookies hat — `true`, wenn es Zugriff hat, und `false`, wenn nicht.

Das von dieser Methode zurückgegebene Ergebnis kann in einigen Fällen ungenau sein:

1. Der Benutzer könnte aktive Browsereinstellungen haben, die Third-Party-Cookies blockieren; in diesem Fall kann `true` zurückgegeben werden, obwohl Third-Party-Cookies weiterhin unzugänglich sind. Um eine solche Situation zu bewältigen, sollten Sie Fehler, die das Abrufen von Cookie-Werten verhindern, elegant handhaben; beispielsweise den Benutzer darüber informieren, dass der Zugriff auf seine personalisierten Einstellungen blockiert ist, und ihn einladen, sich erneut anzumelden, um diese zu nutzen.
2. Der Browser könnte den Zugriff auf Third-Party-Cookies standardmäßig nicht blockieren; in diesem Fall kann `false` zurückgegeben werden, obwohl Third-Party-Cookies zugänglich sind, und der Speicherzugriff nicht angefordert werden müsste (d. h. über {{domxref("Document.requestStorageAccess()")}}). Um dieses Problem zu umgehen, könnten Sie {{domxref("Document.cookie")}} abfragen, um herauszufinden, ob Ihre Cookies zugänglich sind, und {{domxref("Document.requestStorageAccess()")}} aufrufen, wenn sie es nicht sind.

> [!NOTE]
> Wenn das Versprechen aufgelöst wird und ein Benutzeraktionenereignis verarbeitet wurde, als die Funktion ursprünglich aufgerufen wurde, wird der Auflösungs-Handler ausgeführt, als ob ein Benutzeraktionenereignis verarbeitet würde, sodass er APIs aufrufen kann, die eine Benutzeraktivierung erfordern.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das aktuelle {{domxref("Document")}} noch nicht aktiv ist.

## Beispiele

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // Speicherzugriff wurde bereits gewährt.
    console.log("cookie access granted");
  } else {
    // Speicherzugriff wurde noch nicht gewährt;
    // Sie könnten requestStorageAccess() aufrufen wollen.
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

- {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
